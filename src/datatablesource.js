export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt="Avatar"/>
          {params.row.username}
        </div>
      );
    },
  }, {
    field:"email", headerName:"Email", width:230,
  }, {
    field:"age", headerName:"Age", width:100,
  },
  {
    field:"status", headerName:"Status", width:160, renderCell: (params)=> {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
  }

];

export const userRows = [
  {
    id: 12,
    img: 'https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg',
    username: 'Joh Allan',
    status: 'pending',
    email: 'joh@gmail.com',
    age: '29',
  },
  {
    id: 13,
    img: 'https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg',
    username: 'Joh Allan',
    status: 'active',
    email: 'joh@gmail.com',
    age: '12',
  },
  {
    id: 23,
    img: 'https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg',
    username: 'Alexandro',
    status: 'passive',
    email: 'alexandro@gmail.com',
    age: '39',
  }, 
  {
    id: 77,
    img: 'https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg',
    username: 'Kamili',
    status: 'active',
    email: 'kamikami@gmail.com',
    age: '28',
  },
  {
  id:45,
  img:"https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg",
  username:'Sebene',
  status:'pending',
  email:'seb@gmail.com',
  age:'22',
}
];
