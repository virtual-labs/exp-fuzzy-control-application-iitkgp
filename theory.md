# Introduction

Fuzzy controllers are very simple conceptually. They consist of an input stage, a processing stage, and an output stage. The input stage maps sensor or other inputs, such as switches, thumbwheels, and so on, to the appropriate membership functions and truth values. The processing stage invokes each appropriate rule and generates a result for each, then combines the results of the rules. Finally, the output stage converts the combined result back into a specific control output value.

The most common shape of membership functions is triangular, although trapezoidal and bell curves are also used, but the shape is generally less important than the number of curves and their placement. From three to seven curves are generally appropriate to cover the required range of an input value, or the "universe of discourse" in fuzzy jargon.

# Theory

TA Fuzzy control system is a control system implemented using fuzzy logic. The majority of fuzzy control systems are based on the Mamdani model or an extension of this such as the Takagi-Sugeno model.

Fuzzy control has been used in many industrial systems since the late 1970s. More recently fuzzy control has been used in a number of commercial products such as electric shavers, automatic transmissions and video cameras, Russell and Norvig (2003) review a number of these commercial systems and note that a number of papers argue that, these applications are successful because they have small rule bases, no changing of inferences, and tuneable parameters that can be adjusted to improve the system's performance. "The fact that they are implemented with fuzzy operators might be incidental to their success" (Russell and Norvig, 2003).

Two widely used fuzzy system types are Mamdani and Takagi-Sugeno. These types differ in their methods of rule consequent. The Mamdani system uses an output membership function with defuzzification techniques to map the input data to an output value. The Takagi-Sugeno system, as described by Zimmermann (2000), uses the same fuzzy inference as the Mamdani method, only differing in the way in which the rules are processed as it uses functions off the input variables as the rule consequent. The Takagi-Sugeno method is often used to implement control systems, where the Mamdani method is usually used for handling information, such as sorting data into classes.