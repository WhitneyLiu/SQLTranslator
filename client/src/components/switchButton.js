import { Switch } from "@headlessui/react";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import classNames from "../helper/classNames";
import "../styles/switchButton.scss";

export default function SwitchButton(props) {
  return (
    <Switch.Group as="div" className="switch-container">
      <Switch
        checked={props.enabled}
        onChange={props.onChange}
        className={classNames(
          props.enabled ? "bg-indigo-600" : "bg-gray-200",
          "switch-button"
        )}
      >
        <span
          aria-hidden="true"
          className={props.enabled ? "translate-x-5" : "translate-x-0"}
        />
      </Switch>
      <Switch.Label as="span" className="switch-label">
        <CircleStackIcon /> <span>{props.label}</span>
      </Switch.Label>
    </Switch.Group>
  );
}
