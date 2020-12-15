const Data = () => {
  const data = {
    articles: [
      {
        id: 1,
        title: "Apa itu Git dan Github?",
        desc:
          "Git adalah version control system (VCS) yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Git memudahkan developer untuk mengetahui perubahan source code dari pada membuat duplikat file saat melakukan revisi. Git sendiri di memiliki kecepatan dan effisiensi untuk mengatur project kecil sampai besar. Git dilhahir pada tahun 2005 yang menggantikan BitKeeper yang status gratis nya telah dicabut.",
        picture:
          "https://www.somagnews.com/wp-content/uploads/2020/04/75-e1586981465263.png",
      },
      {
        id: 2,
        title: "Konflik di Repository github",
        desc:
          "Dalam sebuah kolaborasi timbul suatu masalah bukanlah hal yang aneh, melainkan sudah menjadi suatu hal wajar. Begitu pula saat para developer sedang melakukan kolaborasi pada sebuah projek sering mendapat sebuah permasalahan atau konflik yang terjadi. Dalam kolaborasi pembuatan projek developer akan mendapatkan tugasnya masing - masing, namun terkadang akan ada suatu saat dimana beberapa developer mengerjakan suatu kasus pada projek di file yang sama dengan developer lainnya.",
        picture:
          "https://2.bp.blogspot.com/-DEigCiYJJfY/WLMaWoeoONI/AAAAAAAAELQ/qvDUmoiDWQMElIHdl8y4qkT0ZsjDk6TzQCPcB/s1600/konflik-branch-repositori-git.png",
      },
    ],
  };

  return data;
};

export default Data;
