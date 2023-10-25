const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOraclexJWBmE = await BirdOracle.new({from: accounts[3]});
		const address8KO0da = accounts[0]
		const addresss57l1Ko = accounts[0]
		const uintR6K4wM5 = await BirdOraclexJWBmE.getRatingByAddress.call(address8KO0da, {from: accounts[5]});
		const uintdmjm5s = await BirdOraclexJWBmE.getRatingByAddress.call(addresss57l1Ko, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewtuh8Yl = await BirdOracle.new({from: accounts[4]});
		const stringduvpoYV = "8WIpOQUvM7WLCJFD6xnCZcDKPYSpoUJTBgP8wYpOahaY98W8"
		const stringkbAUHFI = "DXZLrn"
		const uintHlTYcM8 = await BirdOraclewtuh8Yl.getRating.call({from: accounts[0]});
		const 
ab8ubFL = await BirdOraclewtuh8Yl.newChainRequest.call(stringkbAUHFI, stringduvpoYV, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleKuZd2Fu = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxQwhSd = accounts[4]
		const addressSTTjVFZ = accounts[0]
		const uintOYfneEF = BigInt("1833")
		const uintOz1Oc6H = BigInt("1792")
		const stringntuvMHd = "MOakaAPBGQ"
		const uintuj9Lyot = BigInt("248")
		const uintSQzrUld = BigInt("1797")
		const uintn5cKZq = await BirdOracleKuZd2Fu.getRatingByAddress.call(addressxQwhSd, {from: accounts[0]});
		const uintNgPXwBn = await BirdOracleKuZd2Fu.getRating.call({from: accounts[0]});
		const uintm1kFgN6 = await BirdOracleKuZd2Fu.getRatingByAddress.call(addressSTTjVFZ, {from: accounts[4]});
		const stringlVZglTL = await BirdOracleKuZd2Fu.substring.call(stringntuvMHd, uintOz1Oc6H, uintOYfneEF, {from: accounts[3]});
		const 
cU8XcAL = await BirdOracleKuZd2Fu.updatedChainRequest.call(uintSQzrUld, uintuj9Lyot, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDNuDPF = await BirdOracle.new({from: accounts[0]});
		const stringixgQRgo = "NOnbHZVYttuJXVk4WpweMdMxj8bO32LN9U"
		const uinty4ozX9O = BigInt("1473")
		const uintDWOtT7E = BigInt("694")
		const uintsoEzBG = BigInt("4")
		const uintYJjCeoh = BigInt("1479")
		const stringTrE41DT = "3MdY934Hg"
		const uintvjuCzej = BigInt("1351")
		const stringdV1dwzH = "13ZoAOTh0rOdSvhDnKcUcDP9307xrIjevwpT6FuiMPhSaX5RpmNHJgaMKM"
		const addressaELBr0v = await BirdOracleDNuDPF.parseAddr.call(stringixgQRgo, {from: accounts[2]});
		const 
Txn1hXv = await BirdOracleDNuDPF.updatedChainRequest.call(uintDWOtT7E, uinty4ozX9O, {from: accounts[3]});
		const stringHrfSv8W = await BirdOracleDNuDPF.substring.call(stringTrE41DT, uintYJjCeoh, uintsoEzBG, {from: accounts[4]});
		const stringqaAJdPw = await BirdOracleDNuDPF.substring.call(stringdV1dwzH, uintvjuCzej, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRxmcjFU = await BirdOracle.new({from: accounts[4]});
		const addressrRoG9db = accounts[4]
		const stringqx2dSUK = "Ls90uWLid7L1rf8BGW3CrH4t3XXMUrgNs7P26O6W4oedl2l9hHnQjKyVlm4vwyMhUqequmnJXukq"
		const uintkaAGOB = BigInt("648")
		const uintpaRGv54 = BigInt("362")
		const stringa9Txl6c = "a8VtcNfY45hqkRKm74g"
		const uintHB3qUYC = BigInt("729")
		const stringQW9AW1F = "HfttP5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoWiXCtKaBkP"
		const uintkiReaRo = await BirdOracleRxmcjFU.getRatingByAddress.call(addressrRoG9db, {from: accounts[4]});
		const uintcUbg7o = await BirdOracleRxmcjFU.getRatingByAddressString.call(stringqx2dSUK, {from: accounts[0]});
		const stringbgZkNOm = await BirdOracleRxmcjFU.substring.call(stringa9Txl6c, uintpaRGv54, uintkaAGOB, {from: accounts[0]});
		const stringPOvupng = await BirdOracleRxmcjFU.substring.call(stringQW9AW1F, uintHB3qUYC, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclegpg9qBR = await BirdOracle.new({from: accounts[3]});
		const uintVqwXy46 = BigInt("654")
		const uintYwmqVfR = BigInt("474")
		const uinte7eyWAR = BigInt("178")
		const uintSRnair = BigInt("578")
		const stringUBIRMU = "Tyl5GrByPEBKWY98rzkoadTe3AvR0GccBKgfPl5QaYvopaIHHdmc"
		const stringINn35ts = "brpqV9116pmcn2Oe9s4DQBryIHwy23McBaJeyG3JUQy7R57oeDIYkTiNTMhoBQNWlRSSxekH3R"
		const stringNwRPan = "wXg6VH0uHFFrxaLfh2vtSdgt5222AtY9TAG0tssYul"
		const stringgTP0m16 = "EJcFzl1wnvChxd858avdbE"
		const 
IFwd4Km = await BirdOraclegpg9qBR.updatedChainRequest.call(uintYwmqVfR, uintVqwXy46, {from: accounts[3]});
		const 
m1AuoP6 = await BirdOraclegpg9qBR.updatedChainRequest.call(uintSRnair, uinte7eyWAR, {from: accounts[4]});
		const address0ZTZVH = await BirdOraclegpg9qBR.parseAddr.call(stringUBIRMU, {from: accounts[0]});
		const uintXQxS72f = await BirdOraclegpg9qBR.getRatingByAddressString.call(stringINn35ts, {from: accounts[0]});
		const 
tWIY1ZR = await BirdOraclegpg9qBR.newChainRequest.call(stringgTP0m16, stringNwRPan, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclesiBHYes = await BirdOracle.new({from: accounts[5]});
		const uintL8P19AW = BigInt("639")
		const uintqJgIx02 = BigInt("1540")
		const stringrGx1b94 = "TE47MAHhR0Sqp"
		const uintQA42HUD = BigInt("1244")
		const uintAVmSSUE = BigInt("1329")
		const uintGsQDwCF = BigInt("1740")
		const uintCI7lgmU = BigInt("1877")
		const stringEg1zKm8 = "kDAykMhfRWkOFFmdtq1J2UitsZwpE6wCBnLrbFO2xmiILA21xk7"
		const stringrkD0OHe = await BirdOraclesiBHYes.substring.call(stringrGx1b94, uintqJgIx02, uintL8P19AW, {from: accounts[1]});
		const 
ilJsikY = await BirdOraclesiBHYes.updatedChainRequest.call(uintAVmSSUE, uintQA42HUD, {from: accounts[2]});
		const stringbEk3B9H = await BirdOraclesiBHYes.substring.call(stringEg1zKm8, uintCI7lgmU, uintGsQDwCF, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRxmcjFU = await BirdOracle.new({from: accounts[4]});
		const uintx33zv13 = BigInt("771")
		const stringzGPcyh2 = "6YiYuDlAqXuYSIToWpwTeMOAHe8vOT9ki8iG81xctpaVwBeQh60SxD9UcnkvwMifwLBqxCJ5"
		const addressBNvzYg = accounts[4]
		const stringqx2dSUK = "Ls90uWLid7L1rf8BGW3trH4t3XXMUrgNs7P26O6W4oedl2l9hHnQjKyVlm4vwyMhUqequmnJXukq"
		const uintdFuTaTv = BigInt("648")
		const uinthTPVQNd = BigInt("362")
		const stringa9Txl6c = "a8VtcNfY45hqkRKm74g"
		const uintzj2RR5 = BigInt("729")
		const stringQW9AW1F = "HfttP5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoWiXCtKaBkP"
		const stringZM0JJ95 = await BirdOracleRxmcjFU.substring.call(stringzGPcyh2, uintx33zv13, {from: accounts[1]});
		const uintkiReaRo = await BirdOracleRxmcjFU.getRatingByAddress.call(addressBNvzYg, {from: accounts[4]});
		const uintcUbg7o = await BirdOracleRxmcjFU.getRatingByAddressString.call(stringqx2dSUK, {from: accounts[0]});
		const stringbgZkNOm = await BirdOracleRxmcjFU.substring.call(stringa9Txl6c, uinthTPVQNd, uintdFuTaTv, {from: accounts[0]});
		const stringPOvupng = await BirdOracleRxmcjFU.substring.call(stringQW9AW1F, uintzj2RR5, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclewtuh8Yl = await BirdOracle.new({from: accounts[4]});
		const uintkQ3Gqv6 = BigInt("1115")
		const stringx7kCBM = "BtmK0axHCa3vMTjvYlQBBb5z8p"
		const stringduvpoYV = "8WIpOQUvM7WLCJFD6xnCZcDKPYSpoUJTBgP8wYpOahaY98W8"
		const stringkbAUHFI = "DXZLrn"
		const stringvi7ApRZ = await BirdOraclewtuh8Yl.substring.call(stringx7kCBM, uintkQ3Gqv6, {from: accounts[0]});
		const 
ab8ubFL = await BirdOraclewtuh8Yl.newChainRequest.call(stringkbAUHFI, stringduvpoYV, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleRxmcjFU = await BirdOracle.new({from: accounts[4]});
		const addressEdeOhPv = accounts[4]
		const stringqx2dSUK = "Ls90uWLid7L1rf8BGW3CrH4t3XXMUrgNs7P26O6W4oedl2l9hHnQjKyVlm4vwyMhUqequmnJXukq"
		const uintMNWq6EW = BigInt("729")
		const stringQW9AW1F = "HfttP5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoWiXCtKaBkP"
		const uintkiReaRo = await BirdOracleRxmcjFU.getRatingByAddress.call(addressEdeOhPv, {from: accounts[4]});
		const uintcUbg7o = await BirdOracleRxmcjFU.getRatingByAddressString.call(stringqx2dSUK, {from: accounts[0]});
		const stringPOvupng = await BirdOracleRxmcjFU.substring.call(stringQW9AW1F, uintMNWq6EW, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracle6zFxwN = await BirdOracle.new({from: accounts[3]});
		const uintYvWbdQP = BigInt("723")
		const stringdNkW6k9 = "diawa8wMz8TirWkw03"
		const addressdweUvRd = accounts[5]
		const uintK7msEtt = BigInt("1357")
		const uintBR8aVkW = BigInt("1374")
		const stringcetkuOE = await BirdOracle6zFxwN.substring.call(stringdNkW6k9, uintYvWbdQP, {from: accounts[4]});
		const uintPLWbeBV = await BirdOracle6zFxwN.getRatingByAddress.call(addressdweUvRd, {from: accounts[3]});
		const 
zks9cOm = await BirdOracle6zFxwN.updatedChainRequest.call(uintBR8aVkW, uintK7msEtt, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleZLvVczw = await BirdOracle.new({from: accounts[2]});
		const uintBBlJBi2 = BigInt("1895")
		const stringo6Xo4Xh = "ujLNkWaHYppHlkvsFXI0WaSPDHBmRr7h4gh0bazRjQJwSztlYKnmC4YSqrTAVFohMEWXcAJiiGBOG0NwqY9G8I3tC91hRC"
		const stringMQ6blVt = "F91eQNximOCOtPq5KGnqFcV"
		const stringZog64s = "3NR21j1N7T7bWzLWCwDxLXAK6bQcxqmhxpH4qfCBGYf"
		const uintBY8BjRm = BigInt("166")
		const stringcT0wn1v = "XaUC8WebxSaUgfmUdL6HDrIz54JQPGSzvCbyrQIlXkVacdqmF4aI2NIh93wsbdLV3q0YoUgN"
		const uintohGpiWY = BigInt("656")
		const uintORkjuXk = BigInt("1683")
		const stringuYqqmOI = "ulpO8XQn3fXcQkqMBhgGA7HbvqW90QUWPsmdcV8BcM7DjZgS7CARpaACb7IPv6MK4FF9Rn8O"
		const stringQm8wpPG = "vO0VAlUJjDCK9skP7IwmMm7RnsOLRM9DJi8QumZdWdYDMmuUOr1v37eplJXkZ1uJ7AIqxNLf1JlFymQCB2Ab56"
		const stringZABtcct = await BirdOracleZLvVczw.substring.call(stringo6Xo4Xh, uintBBlJBi2, {from: accounts[3]});
		const addressZi63eXq = await BirdOracleZLvVczw.parseAddr.call(stringMQ6blVt, {from: accounts[0]});
		const stringApLD8Tf = await BirdOracleZLvVczw.extractAddress.call(stringZog64s, {from: accounts[4]});
		const stringYPlUMQ = await BirdOracleZLvVczw.substring.call(stringcT0wn1v, uintBY8BjRm, {from: accounts[1]});
		const stringoboys1l = await BirdOracleZLvVczw.substring.call(stringuYqqmOI, uintORkjuXk, uintohGpiWY, {from: accounts[3]});
		const uintHDIZYl = await BirdOracleZLvVczw.getRatingByAddressString.call(stringQm8wpPG, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejP6biGM = await BirdOracle.new({from: accounts[1]});
		const stringmhUCVP5 = "tBFiNSkV85vW1Wkvl0e8neqz9tS4wy2GaAktPebDlKppaiU494zeImBvHeLNygG3AO4wB13zsPqwBE"
		const uintrsr877a = BigInt("2043")
		const stringNAkPues = "xqrUQ8RHENo8aCFGjPACN88PJGXO9IE5BBRUZNn14sQ226nVw5W2Gm7JfbxumXTo44jFKcZKRX3xqzloCR20IhaW8z"
		const uintT6YjRYS = BigInt("1421")
		const uintIPAUnqJ = BigInt("1406")
		const stringvo8fZQo = "9dGBgdmRpNhZWBG1lBmi"
		const uintvNeXa3H = BigInt("1429")
		const uintE8xJh4 = BigInt("1545")
		const stringyVzVIJE = "6BYIH4aKp75r2IhpvGSTeIrOpqulGH5tioucpOrvEbXaGjPZirA1hK4caEf5xctzLUk5KJqFwPNY1HfcXErm"
		const uintfg9shOz = BigInt("1200")
		const uinteijCqv = BigInt("595")
		const stringOEDZOba = "3US1DGLNfa9cU7otsG8"
		const addressID6Zl6l = accounts[3]
		const uintRyVtW4w = BigInt("166")
		const stringpmh7Gd9 = "CCXECqBPocmjX3mGE2wcK3elHnX5xjXQuNJG6EuouVLHImBcPjFLiSzqPf0zCfhSjSt"
		const uintTwswD2G = await BirdOraclejP6biGM.getRatingByAddressString.call(stringmhUCVP5, {from: accounts[3]});
		const stringZmlmjY = await BirdOraclejP6biGM.substring.call(stringNAkPues, uintrsr877a, {from: "0x0000000000000000000000000000000000000001"});
		const stringCL70rR7 = await BirdOraclejP6biGM.substring.call(stringvo8fZQo, uintIPAUnqJ, uintT6YjRYS, {from: accounts[3]});
		const 
mpXxPTY = await BirdOraclejP6biGM.updatedChainRequest.call(uintE8xJh4, uintvNeXa3H, {from: accounts[1]});
		const stringe1DHcAK = await BirdOraclejP6biGM.extractAddress.call(stringyVzVIJE, {from: accounts[0]});
		const 
O0y3UzD = await BirdOraclejP6biGM.updatedChainRequest.call(uinteijCqv, uintfg9shOz, {from: accounts[0]});
		const stringbPDH6o = await BirdOraclejP6biGM.extractAddress.call(stringOEDZOba, {from: accounts[4]});
		const uintGgPrKVZ = await BirdOraclejP6biGM.getRatingByAddress.call(addressID6Zl6l, {from: accounts[4]});
		const stringMutKcCs = await BirdOraclejP6biGM.substring.call(stringpmh7Gd9, uintRyVtW4w, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejP6biGM = await BirdOracle.new({from: accounts[1]});
		const uintYBy5sWm = BigInt("443")
		const stringKQ7Z9FQ = "SCWD4VGDgt77k8ZOYnM8QPCH9sND5Db"
		const uint4XqNlg = BigInt("1421")
		const uintECCh0Wq = BigInt("1415")
		const stringvo8fZQo = "9dGBgdmRpNhZWBG1lBmi"
		const stringApq0ygr = "4vlISseX5taFQrcuzAbBjgBl1QaevVjn9R3JsMnsJAjupuQLc8M"
		const uintOzyJ6kP = BigInt("59")
		const uintVkRGQRT = BigInt("757")
		const stringeJRp6LX = "Qr8UnubSZSp67m"
		const addressOWEbiOY = accounts[1]
		const stringsn9eLJT = await BirdOraclejP6biGM.substring.call(stringKQ7Z9FQ, uintYBy5sWm, {from: accounts[5]});
		const stringCL70rR7 = await BirdOraclejP6biGM.substring.call(stringvo8fZQo, uintECCh0Wq, uint4XqNlg, {from: accounts[3]});
		const uintE0CwOik = await BirdOraclejP6biGM.getRatingByAddressString.call(stringApq0ygr, {from: accounts[3]});
		const 
gP5I4Tg = await BirdOraclejP6biGM.updatedChainRequest.call(uintVkRGQRT, uintOzyJ6kP, {from: accounts[3]});
		const uintFh3Y4Go = await BirdOraclejP6biGM.getRatingByAddressString.call(stringeJRp6LX, {from: accounts[1]});
		const uintbDTYdu0 = await BirdOraclejP6biGM.getRatingByAddress.call(addressOWEbiOY, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejP6biGM = await BirdOracle.new({from: accounts[1]});
		const uintJH1f64I = BigInt("1421")
		const uintT1Tjui = BigInt("1421")
		const stringvo8fZQo = "9dGBgdmRpNhZWBG1lBmi"
		const stringf2g4PbT = "RNsNwqvfRQxyjvKlOIBghJdK1RIJs65YozpWkJ7DnsT1TvwbhWoprUMyCStHCb0ACFLw50A8O74LRUz0Xsx"
		const uintLJlh0Ft = BigInt("1638")
		const uintiDxI2h = BigInt("962")
		const stringCL70rR7 = await BirdOraclejP6biGM.substring.call(stringvo8fZQo, uintT1Tjui, uintJH1f64I, {from: accounts[3]});
		const addressWpxOEUW = await BirdOraclejP6biGM.parseAddr.call(stringf2g4PbT, {from: accounts[4]});
		const 
IAFyuue = await BirdOraclejP6biGM.updatedChainRequest.call(uintiDxI2h, uintLJlh0Ft, {from: accounts[4]});
	});
})