import {Pill} from "@/components/Pill";
import {PillStyle} from "@/components/Pill/Pill";

type EmbededLink = {
  href: string;
  text: string;
  id: string;
}

type KeyValueItem = {
  key: string;
  value: string;
}

type ResumeItemProps = {
  title: string;
  subtitle?: string;
  timeline?: string;
  listItems?: string[];
  embeddedLinks?:  EmbededLink[];
  keyValueItems?: KeyValueItem[];
}

const ResumeItem = ({title, subtitle, timeline, listItems, embeddedLinks, keyValueItems }: ResumeItemProps) => {

  return (
    <div className="resumeItem">
      <Pill text={title} style={PillStyle.Blue} classes="mt-4" />

      {subtitle && (<p className="italic my-2 ml-2">{subtitle}</p>)}

      {timeline && (<p className="italic my-2 ml-2">{timeline}</p>)}

      {listItems && (
        <ul className="list-disc ml-6 mt-2">
          {listItems?.map((item) => (
            <li key={item} className="mb-2 last:mb-0">{_interpolate(item, embeddedLinks )}</li>
          ))}
        </ul>
      )}

      {keyValueItems && (
        <div className="ml-4 mt-2">
          {keyValueItems?.map((item) => (
            <p key={item.key} className="mb-2"><span className="font-bold">{item.key}:</span> {item.value}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// todo need some research assistance here to: get targeting logic dynamc and get styles applied to the element. not being picked up with the string to danderous insert html approach.
function _interpolate(text: string, embeddedLinks: EmbededLink[]) {
  // search for the id and replace it with an a tag with embedded link deets, then return jsx
  const interpolated = text.replace('{{boiseInterpretersLink}}', `<a href="https://www.boiseinssserpreters.com" className="cursor-pointer text-blue-500 hover:text-blue-600 underline">Boise Interpreters</a>`)

  return <p dangerouslySetInnerHTML={{ __html: interpolated }} />
}

export default ResumeItem;