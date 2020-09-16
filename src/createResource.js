export const createResource = cb => {
  let status = "pending";
  let result;
  let suspender;

  return {
    read(args) {
      const promise = cb(args);

      suspender = promise.then(
        r => {
          status = "success";
          result = r;
        },
        e => {
          status = "error";
          result = e;
        }
      );

      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
      }
    }
  };
};
