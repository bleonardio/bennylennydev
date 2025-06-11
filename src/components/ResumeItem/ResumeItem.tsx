import { Pill } from "@/components/Pill";
import { PillStyle } from "@/components/Pill/Pill";

type EmbeddedLink = {
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
  embeddedLink?:  EmbeddedLink;
  keyValueItems?: KeyValueItem[];
}

const ResumeItem = ({
  title,
  subtitle,
  timeline,
  listItems,
  embeddedLink,
  keyValueItems,
}: ResumeItemProps) => {
  return (
    <div className="resumeItem">
      <Pill
        text={title}
        classes="mt-4"
        style={PillStyle.Secondary}
      />

      {subtitle && (<p className="my-2 ml-2">{subtitle}</p>)}

      {timeline && (<p className="italic my-2 ml-2">{timeline}</p>)}

      {listItems && (
        <ul className="list-disc ml-6 mt-2">
          {listItems?.map((item) => (
            <li key={item} className="mb-2 last:mb-0">
              {_interpolate(item, embeddedLink )}
            </li>
          ))}
        </ul>
      )}

      {keyValueItems && (
        <div className="ml-4 mt-2">
          {keyValueItems?.map((item) => (
            <p
              key={item.key}
              className="mb-2"
            >
              <span className="font-bold">{item.key}:</span> {item.value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// This could be extended to use the custom Link component, and support embedding multiple links,
// but I'm opting to leave it tailored to my simple use case until the need arises for more flexibility here.
function _interpolate(text: string, embeddedLink?: EmbeddedLink) {
  if (!embeddedLink) {
    return text;
  }

  const interpolated = text.replace(
    embeddedLink.id,
    `<a href="${embeddedLink.href}" target="_blank" class="cursor-pointer text-secondary hover:text-secondary-hover font-bold">${embeddedLink.text}</a>`
  );

  return <p dangerouslySetInnerHTML={{ __html: interpolated }} />
}

export default ResumeItem;