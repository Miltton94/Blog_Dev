interface PropsNotice {
  title: string;
}

const Notice = (props: PropsNotice) => {
  return (
    <div className="flex flex-col items-start ">
      <span className="text-base mb-2 block">Janeriro 04, 2022</span>
      <a href="#">
        <strong className="text-2xl font-bold leading-9 text-purple-700 block hover:opacity-90 transition-opacity">
          {props.title}
        </strong>
      </a>
      <p className="text-base leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        delectus ipsa impedit dolores modi illo, molestiae incidunt neque
        maiores fugiat, quaerat iure magnam enim quos recusandae numquam
        provident esse eveniet?
      </p>
    </div>
  );
};

export default Notice;
