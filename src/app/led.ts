/**
 * Eine einzelne Led, die z.B. auf einem Raspberry Pi angezeigt werden kann
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farbe als valider CSS-String
   */
  color: string;
}
