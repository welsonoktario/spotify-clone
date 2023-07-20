export const statusOk = (data = null, message = null) => ({
  status: 'ok',
  ...(data && { data }),
  ...(message && { message }),
})

export const statusFail = (message = null, data = null) => ({
  status: 'fail',
  ...(message && { message }),
  ...(data && { data }),
})
