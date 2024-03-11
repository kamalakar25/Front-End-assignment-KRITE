import { Dropdown } from 'antd';

const items = [
  {
    key: '1',
    label: "Top Brands",
  },
  {
    key: '2',
    label: "Latest Brands",

    disabled: true,
  },
  {
    key: '3',
    label: "Brands",
    disabled: true,
  },
];
export default function DropDown({ label, iconleft, iconright, clickable }) {
  return (
    <Dropdown menu={{ items }} trigger={[`${clickable ? 'click' : 'hover'}`]}>
      <a onClick={(e) => e.preventDefault()}>
        <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
          {iconleft}
          {label}
          {iconright}
        </button>
      </a>
    </Dropdown>
  );
}
