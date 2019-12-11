function getNationality(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "uk"; }
  else if (name.includes("lynn")) { return "uk"; }
  else if (name.includes("rowland")) { return "uk"; }
  else if (name.includes("paffett")) { return "uk"; }
  else if (name.includes("turvey")) { return "uk"; }
  else if (name.includes("sims")) { return "uk"; }
  else if (name.includes("calado")) { return "uk"; }

  else if (name.includes("frijns")) { return "nl"; }
  else if (name.includes("vries")) { return "nl"; }

  else if (name.includes("piquet")) { return "br"; }
  else if (name.includes("nasr")) { return "br"; }
  else if (name.includes("grassi")) { return "br"; }
  else if (name.includes("massa")) { return "br"; }

  else if (name.includes("evans")) { return "nz"; }
  else if (name.includes("hartley")) { return "nz"; }

  else if (name.includes("vandoorne")) { return "be"; }
  else if (name.includes("ambrosio")) { return "be"; }

  else if (name.includes("günther")) { return "de"; }
  else if (name.includes("abt") && !(name.includes("audi"))) { return "de"; }
  else if (name.includes("lotterer")) { return "de"; }
  else if (name.includes("wehrlein")) { return "de"; }

  else if (name.includes("lopez")) { return "ar"; }

  else if (name.includes("dillmann")) { return "fr"; }
  else if (name.includes("vergne")) { return "fr"; }

  else if (name.includes("mortara")) { return "ch"; }
  else if (name.includes("buemi")) { return "ch"; }
  else if (name.includes("jani")) { return "ch"; }
  else if (name.includes("müller")) { return "ch"; }

  else if (name.includes("da costa")) { return "pt"; }

  else if (name.includes("rosenqvist")) { return "se"; }

  else if (name.includes("qing")) { return "cn"; }

  else if (name.includes("audi")) { return "audi"; }
  else if (name.includes("bmw")) { return "bmw"; }
  else if (name.includes("techeetah")) { return "techeetah"; }
  else if (name.includes("virgin")) { return "virgin"; }
  else if (name.includes("dragon")) { return "dragon"; }
  else if (name.includes("mahindra")) { return "mahindra"; }
  else if (name.includes("porsche")) { return "porsche"; }
  else if (name.includes("nio")) { return "nio"; }
  else if (name.includes("venturi")) { return "venturi"; }
  else if (name.includes("nissan")) { return "nissan"; }
  else if (name.includes("mercedes")) { return "mercedes"; }
  else if (name.includes("jaguar")) { return "jaguar"; }
}

function getTeam(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "virgin"; }
  else if (name.includes("frijns")) { return "virgin"; }

  else if (name.includes("lynn")) { return "jaguar"; }
  else if (name.includes("calado")) { return "jaguar"; }
  else if (name.includes("piquet")) { return "jaguar"; }
  else if (name.includes("evans")) { return "jaguar"; }

  else if (name.includes("vandoorne")) { return "mercedes"; }
  else if (name.includes("vries")) { return "mercedes"; }

  else if (name.includes("hartley")) { return "dragon"; }
  else if (name.includes("müller")) { return "dragon"; }

  else if (name.includes("dillmann")) { return "nio"; }
  else if (name.includes("turvey")) { return "nio"; }
  else if (name.includes("qing")) { return "nio"; }

  else if (name.includes("grassi")) { return "audi"; }
  else if (name.includes("abt")) { return "audi"; }

  else if (name.includes("massa")) { return "venturi"; }
  else if (name.includes("mortara")) { return "venturi"; }

  else if (name.includes("rowland")) { return "nissan"; }
  else if (name.includes("buemi")) { return "nissan"; }

  else if (name.includes("vergne")) { return "techeetah"; }
  else if (name.includes("da costa")) { return "techeetah"; }

  else if (name.includes("günther")) { return "bmw"; }
  else if (name.includes("sims")) { return "bmw"; }

  else if (name.includes("ambrosio")) { return "mahindra"; }
  else if (name.includes("rosenqvist")) { return "mahindra"; }
  else if (name.includes("wehrlein")) { return "mahindra"; }

  else if (name.includes("jani")) { return "porsche"; }
  else if (name.includes("lotterer")) { return "porsche"; }

  else if (name.includes("techeetah")) { return "techeetah"; }
  else if (name.includes("mahindra")) { return "mahindra"; }
  else if (name.includes("virgin")) { return "virgin"; }
  else if (name.includes("nissan")) { return "nissan"; }
  else if (name.includes("bmw")) { return "bmw"; }
  else if (name.includes("audi")) { return "audi"; }
  else if (name.includes("nio")) { return "nio"; }
  else if (name.includes("venturi")) { return "venturi"; }
  else if (name.includes("dragon")) { return "dragon"; }
  else if (name.includes("jaguar")) { return "jaguar"; }
  else if (name.includes("hwa")) { return "hwa"; }
  else if (name.includes("mercedes")) { return "mercedes"; }
  else if (name.includes("porsche")) { return "porsche"; }
}

function getProfile(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "bird"; }
  else if (name.includes("frijns")) { return "frijns"; }

  else if (name.includes("calado")) { return "calado"; }
  else if (name.includes("evans")) { return "evans"; }

  else if (name.includes("vandoorne")) { return "vandoorne"; }
  else if (name.includes("vries")) { return "devries"; }

  else if (name.includes("hartley")) { return "hartley"; }
  else if (name.includes("müller")) { return "mueller"; }

  else if (name.includes("turvey")) { return "turvey"; }
  else if (name.includes("qing")) { return "qing"; }

  else if (name.includes("grassi")) { return "digrassi"; }
  else if (name.includes("abt")) { return "abt"; }

  else if (name.includes("massa")) { return "massa"; }
  else if (name.includes("mortara")) { return "mortara"; }

  else if (name.includes("rowland")) { return "rowland"; }
  else if (name.includes("buemi")) { return "buemi"; }

  else if (name.includes("vergne")) { return "vergne"; }
  else if (name.includes("da costa")) { return "dacosta"; }

  else if (name.includes("günther")) { return "guenther"; }
  else if (name.includes("sims")) { return "sims"; }

  else if (name.includes("ambrosio")) { return "dambrosio"; }
  else if (name.includes("rosenqvist")) { return "rosenqvist"; }
  else if (name.includes("wehrlein")) { return "wehrlein"; }

  else if (name.includes("jani")) { return "jani"; }
  else if (name.includes("lotterer")) { return "lotterer"; }
}

function getName(tla) {
  var name = tla.toLowerCase();

  switch(name) {
    case "abt": return "Daniel Abt";
    case "dig": return "Lucas Di Grassi";
    case "gue": return "Maximilian Günther";
    case "gun": return "Maximilian Günther";
    case "sim": return "Alexander Sims";
    case "jev": return "Jean-Eric Vergne";
    case "dac": return "Antonio Felix da Costa";
    case "bir": return "Sam Bird";
    case "fri": return "Robin Frijns";
    case "har": return "Brendon Hartley";
    case "mul": return "Nico Müller";
    case "mue": return "Nico Müller";
    case "dam": return "Jerome d'Ambrosio";
    case "weh": return "Pascal Wehrlein";
    case "van": return "Stoffel Vandoorne";
    case "vri": return "Nyck de Vries";
    case "tur": return "Oliver Turvey";
    case "qin": return "Qing Hua Ma";
    case "ma": return "Qing Hua Ma";
    case "bue": return "Sebastien Buemi";
    case "row": return "Oliver Rowland";
    case "eva": return "Mitch Evans";
    case "cal": return "James Calado";
    case "jan": return "Neel Jani";
    case "lot": return "Andre Lotterer";
    case "mas": return "Felipe Massa";
    case "mor": return "Edoardo Mortara";

    case "66": return "Daniel Abt";
    case "11": return "Lucas Di Grassi";
    case "28": return "Maximilian Günther";
    case "27": return "Alexander Sims";
    case "25": return "Jean-Eric Vergne";
    case "13": return "Antonio Felix da Costa";
    case "2": return "Sam Bird";
    case "4": return "Robin Frijns";
    case "6": return "Brendon Hartley";
    case "7": return "Nico Müller";
    case "64": return "Jerome d'Ambrosio";
    case "94": return "Pascal Wehrlein";
    case "5": return "Stoffel Vandoorne";
    case "17": return "Nyck de Vries";
    case "3": return "Oliver Turvey";
    case "33": return "Qing Hua Ma";
    case "23": return "Sebastien Buemi";
    case "22": return "Oliver Rowland";
    case "20": return "Mitch Evans";
    case "51": return "James Calado";
    case "18": return "Neel Jani";
    case "36": return "Andre Lotterer";
    case "17": return "Felipe Massa";
    case "48": return "Edoardo Mortara";
    default: return name;
  }
}

function convertNumberToName(number) {
  switch(number) {
    case 66: return "Daniel Abt";
    case 11: return "Lucas Di Grassi";
    case 28: return "Maximilian Günther";
    case 27: return "Alexander Sims";
    case 25: return "Jean-Eric Vergne";
    case 13: return "Antonio Felix da Costa";
    case 2: return "Sam Bird";
    case 4: return "Robin Frijns";
    case 6: return "Brendon Hartley";
    case 7: return "Nico Müller";
    case 64: return "Jerome d'Ambrosio";
    case 94: return "Pascal Wehrlein";
    case 5: return "Stoffel Vandoorne";
    case 17: return "Nyck de Vries";
    case 3: return "Oliver Turvey";
    case 33: return "Qing Hua Ma";
    case 23: return "Sebastien Buemi";
    case 22: return "Oliver Rowland";
    case 20: return "Mitch Evans";
    case 51: return "James Calado";
    case 18: return "Neel Jani";
    case 36: return "Andre Lotterer";
    case 17: return "Felipe Massa";
    case 48: return "Edoardo Mortara";
  }
}

function getTeamName(driver) {
  var name = driver.toLowerCase();
  var team = getTeam(driver);

  if (team.includes("techeetah")) { return "DS Techeetah"; }
  else if (team.includes("mahindra")) { return "Mahindra"; }
  else if (team.includes("virgin")) { return "Virgin"; }
  else if (team.includes("nissan")) { return "Nissan"; }
  else if (team.includes("bmw")) { return "BMW"; }
  else if (team.includes("audi")) { return "Audi"; }
  else if (team.includes("nio")) { return "NIO"; }
  else if (team.includes("venturi")) { return "Venturi"; }
  else if (team.includes("dragon")) { return "Dragon"; }
  else if (team.includes("jaguar")) { return "Jaguar"; }
  else if (team.includes("hwa")) { return "HWA"; }
  else if (team.includes("mercedes")) { return "Mercedes"; }
  else if (team.includes("porsche")) { return "Porsche"; }
}

function getFullTeamName(driver) {
  var name = driver.toLowerCase();
  var team = getTeam(driver);

  if (team.includes("techeetah")) { return "DS Techeetah"; }
  else if (team.includes("mahindra")) { return "Mahindra Racing"; }
  else if (team.includes("virgin")) { return "Envision Virgin Racing"; }
  else if (team.includes("nissan")) { return "Nissan e.dams"; }
  else if (team.includes("bmw")) { return "BMW i Andretti Motorsport"; }
  else if (team.includes("audi")) { return "Audi Sport Abt Schaeffler"; }
  else if (team.includes("nio")) { return "NIO 333 Formula E Team"; }
  else if (team.includes("venturi")) { return "ROKIT Venturi Racing"; }
  else if (team.includes("dragon")) { return "GEOX Dragon"; }
  else if (team.includes("jaguar")) { return "Panasonic Jaguar Racing"; }
  else if (team.includes("hwa")) { return "HWA"; }
  else if (team.includes("mercedes")) { return "Mercedes-Benz EQ Formula E Team"; }
  else if (team.includes("porsche")) { return "TAG Heuer Porsche Formula E Team"; }
}

function getCountry(city) {
  var country = city.toLowerCase();

  if (country.includes("diriyya")) { return "sa"; }
  else if (country.includes("marrakesch")) { return "ma"; }
  else if (country.includes("santiago")) { return "cl"; }
  else if (country.includes("mexico")) { return "mx"; }
  else if (country.includes("hong")) { return "hk"; }
  else if (country.includes("sanya")) { return "cn"; }
  else if (country.includes("rom")) { return "it"; }
  else if (country.includes("paris")) { return "fr"; }
  else if (country.includes("monaco")) { return "mc"; }
  else if (country.includes("berlin")) { return "de"; }
  else if (country.includes("bern")) { return "ch"; }
  else if (country.includes("swiss")) { return "ch"; }
  else if (country.includes("york")) { return "us"; }
  else if (country.includes("seoul")) { return "sk"; }
  else if (country.includes("london")) { return "uk"; }
  else if (country.includes("jakarta")) { return "in"; }
  else if (country.includes("valencia")) { return "es"; }
}
