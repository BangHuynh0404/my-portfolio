
export const patientStatus = (status?: string) => {
   let colorStatus: string = ''
   let messageStatus: string = ''
   switch (status) {
      case "normal":
         colorStatus = "green"
         break;
      case "light":
         colorStatus = "orange"
         break;
      case "heavy":
         colorStatus = "pink"
         break;
      default:
         colorStatus = 'gray'
         break;
   }
   switch (status) {
      case "normal":
         messageStatus = "Khỏe mạnh"
         break;
      case "light":
         messageStatus = "Bệnh nhẹ"
         break;
      case "heavy":
         messageStatus = "Bệnh nặng"
         break;
      default:
         messageStatus = 'Chưa có thông tin'
         break;
   }
   return { colorStatus, messageStatus }
}