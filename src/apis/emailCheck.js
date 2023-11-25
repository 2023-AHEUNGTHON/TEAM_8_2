import axios from "axios";

export const emailCheck = (formData, setFormData, setIsEmailAvailable) => {
  
  axios
    .post('/user/email', formData.email) 
    .then((res) => {
      console.log(res.data);
      alert('사용 가능한 ID입니다.');
      setIsEmailAvailable(true);
    })
    .catch((res) => {
      console.log(res.data);
      alert('사용할 수 없는 ID입니다.');
      setFormData({ ...formData, email: "" });
      setIsEmailAvailable(false);
    });
};
