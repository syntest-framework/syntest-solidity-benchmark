const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleUnz0s3G = await BirdOracle.new({from: accounts[4]});
		const uintlemMeUj = BigInt("1120")
		const uintLHrrW9Z = BigInt("1620")
		const addressJc44DzX = accounts[3]
		const 
YMx1e19 = await BirdOracleUnz0s3G.updatedChainRequest.call(uintLHrrW9Z, uintlemMeUj, {from: accounts[4]});
		const uintv0tarYh = await BirdOracleUnz0s3G.getRatingByAddress.call(addressJc44DzX, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uintMvwlmbo = BigInt("916")
		const uintN8tiIxe = BigInt("678")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3dSXNlBobJJwl7fL1N"
		const uintSaAvijG = BigInt("1107")
		const uintEyHZB0 = BigInt("1059")
		const stringSGnwUxP = "9eBSVld14W94Qjz4utpMMwlDxEqcoggjlx8pAeEuyFHqlx1y1LsVIcgLDbJ0YC2gSITXyj91Gh6tmnEv"
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uintN8tiIxe, uintMvwlmbo, {from: accounts[0]});
		const stringVj5uUKC = await BirdOracleA11KejQ.substring.call(stringSGnwUxP, uintEyHZB0, uintSaAvijG, {from: accounts[3]});
		const uinthcwIM9j = await BirdOracleA11KejQ.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGEyhzQ7 = await BirdOracle.new({from: accounts[0]});
		const stringxcK2kc = "UdAbOlQ1bgTDgEc9Nx3I7KQdjP3iC0JfKfOplvfNJooe5b1chpjKOHYTLPkX9P0FCPz43"
		const string8599k2 = "3yX7plHWiiHkM5rF35LuEm35AcOL9vGn8OB0oW5sX813P33Nu3f9JxDxOtZeqNhUeVv44"
		const stringaE0AT15 = "9ksRiTlU5Ichlxievm2OctlEk2Hpd1yUh38viWbwKEA6Dx8ztyMlHXBaU"
		const uintIIrhmz = BigInt("1594")
		const stringmrkXsTu = "UwM7iGFrz"
		const addresscDXnW0K = await BirdOracleGEyhzQ7.parseAddr.call(stringxcK2kc, {from: accounts[3]});
		const 
JvbchoC = await BirdOracleGEyhzQ7.newChainRequest.call(stringaE0AT15, string8599k2, {from: accounts[2]});
		const stringmIycY9 = await BirdOracleGEyhzQ7.substring.call(stringmrkXsTu, uintIIrhmz, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleCCygQs6 = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const stringOTYy8gQ = "WiieUkobO9cRynbIARioN2QiCVacR8G6mTi6MqAJpBeqoCQYG8WJ7dcqzjk7zGsrYKHRviZqFgpAS45gfMoVNper6ge"
		const stringfpjiYdx = "dvJRLRlQeZVzuP4NUOe6WbBmxAb02cGVT5chHsS9BD7AKUNYhtHfWLmRb66SOGwvMvC2"
		const uintWNXEfZM = await BirdOracleCCygQs6.getRating.call({from: accounts[4]});
		const uintlAU9adw = await BirdOracleCCygQs6.getRatingByAddressString.call(stringOTYy8gQ, {from: accounts[0]});
		const uintMQZwrM4 = await BirdOracleCCygQs6.getRating.call({from: accounts[4]});
		const uintd4bdkJ = await BirdOracleCCygQs6.getRatingByAddressString.call(stringfpjiYdx, {from: accounts[3]});
		const uintXgNK0Ml = await BirdOracleCCygQs6.getRating.call({from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUXhFPK3 = await BirdOracle.new({from: accounts[3]});
		const uintqypdp3u = BigInt("1321")
		const stringRCcMfxN = "Weg9HMnlDcmSv7M7rn5faMUrrhSzVAzNw1c5G56G9nVbgsjBSpMwaN"
		const stringh4uXDZh = "Tby1tjpi0cAKg3bzAZlPvsVy3vHMD99WzYgggb2iIs4n4TPAWvh9RD6QwB6RtMiEHJAg"
		const uintjfq1FnG = BigInt("1173")
		const stringj95q8a = "BwDq5InXYeKf4r1CfLo5Vxn7TmuAtsu9CdNe4nz8Yg1a2ZDEIxLjxHYPNp2JkfcKiTSO"
		const uintBrjeYxG = BigInt("446")
		const uintzi4gado = BigInt("1408")
		const stringMtNZ0V4 = "OBupPVgaXaPQt3AZAlUZBY2oUkEqN9t4qh2WdgdwJkj28Z"
		const stringpzOATo = "7O5OEqPYFZETLvnvIMQ"
		const addressiLMwXJO = accounts[1]
		const stringEC8VQhq = await BirdOracleUXhFPK3.substring.call(stringRCcMfxN, uintqypdp3u, {from: accounts[2]});
		const stringFqO7rxV = await BirdOracleUXhFPK3.extractAddress.call(stringh4uXDZh, {from: accounts[3]});
		const stringwlVE5GA = await BirdOracleUXhFPK3.substring.call(stringj95q8a, uintjfq1FnG, {from: accounts[3]});
		const stringreg1Rvh = await BirdOracleUXhFPK3.substring.call(stringMtNZ0V4, uintzi4gado, uintBrjeYxG, {from: accounts[1]});
		const uintXFEKV67 = await BirdOracleUXhFPK3.getRatingByAddressString.call(stringpzOATo, {from: accounts[1]});
		const uintbjq3aR = await BirdOracleUXhFPK3.getRatingByAddress.call(addressiLMwXJO, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleIxf7i5l = await BirdOracle.new({from: accounts[5]});
		const stringEc3yuYb = "qxhsKQVyckYXHsFEyJgCv70SQVQZsnS5cI5f0WeQ27emQsXcKkxNUR7ufa2DQCOXGK4S7lAI4n"
		const uintgSkL9mt = BigInt("1302")
		const stringTvKssz1 = "nGZzGIX1mobJcCpuY7Y2dRM6hmUgufYWh2pS9H4QjiIKmrRbzjbDXPKcNoK92ruDcvEUWu6rG2pWSnA0ccHpfpYiUFAGkB6Mn"
		const uintR1EETD = BigInt("361")
		const stringQH7HMmP = "UyFuQ4KqDIrAE"
		const stringCpjab7g = "bNiMEjhHu5enAxBAIEgoqDp2TbflEKZwav6Sj5NYVLxuUTmz4nRQ"
		const stringEbXbqR7 = "GadeifY6QHLivLOxBK5MKIljvxHoQWlIcis7qf"
		const stringUGqPP5s = "lduEl38Cs1UIc7Gr91kdYNAwUWkf1XazngYoETN7b"
		const uintY0Djioh = await BirdOracleIxf7i5l.getRatingByAddressString.call(stringEc3yuYb, {from: accounts[0]});
		const stringuBtVeQY = await BirdOracleIxf7i5l.substring.call(stringTvKssz1, uintgSkL9mt, {from: accounts[1]});
		const stringQLnRC0S = await BirdOracleIxf7i5l.substring.call(stringQH7HMmP, uintR1EETD, {from: accounts[3]});
		const uintrc1XmX = await BirdOracleIxf7i5l.getRatingByAddressString.call(stringCpjab7g, {from: "0x0000000000000000000000000000000000000001"});
		const addressORLDWFH = await BirdOracleIxf7i5l.parseAddr.call(stringEbXbqR7, {from: accounts[1]});
		const stringa7VIrcX = await BirdOracleIxf7i5l.extractAddress.call(stringUGqPP5s, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclegHArt4y = await BirdOracle.new({from: accounts[2]});
		const uintsmEI5vY = BigInt("787")
		const stringyKwfvU4 = "88w"
		const stringqr37yL9 = "SQFdsATtXidgIZbNPzkawddGU2t8VandsjbCK2UPOVKe4x4byNDrxEU5dRCUi"
		const stringvY0Q6Sk = await BirdOraclegHArt4y.substring.call(stringyKwfvU4, uintsmEI5vY, {from: accounts[4]});
		const uintpHYMW4s = await BirdOraclegHArt4y.getRating.call({from: accounts[2]});
		const stringqI9iitT = await BirdOraclegHArt4y.extractAddress.call(stringqr37yL9, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclesqzSxyZ = await BirdOracle.new({from: accounts[4]});
		const uintpRgxUdD = BigInt("1325")
		const stringwg5KSFb = "QkxcP0DicPAvFsEfbJ"
		const addressrxoim9E = accounts[1]
		const stringijadph = "6t9XWViHFNtsE6X6Ha6h7X1aaBwk3qWMcH1yQybJ3pglmGAc2UjBzVrdLPHsCviPzgyZ4PKwKIKGlNfcUa"
		const uintTmVVJm = BigInt("2001")
		const stringJk8ey7E = "qDCsCln6B1zLkpPh7sIlwFSuo6iZRjQ4uQqnBuOPLKuPTiIwThh72B"
		const uintAmEZy54 = BigInt("1228")
		const uintAnzh7kf = BigInt("1580")
		const stringHD73uLn = await BirdOraclesqzSxyZ.substring.call(stringwg5KSFb, uintpRgxUdD, {from: accounts[0]});
		const uinttBWnRjF = await BirdOraclesqzSxyZ.getRatingByAddress.call(addressrxoim9E, {from: accounts[4]});
		const stringHSaVB7 = await BirdOraclesqzSxyZ.extractAddress.call(stringijadph, {from: accounts[4]});
		const uintyWXKbmu = await BirdOraclesqzSxyZ.getRating.call({from: accounts[3]});
		const stringiz0GIPd = await BirdOraclesqzSxyZ.substring.call(stringJk8ey7E, uintTmVVJm, {from: accounts[3]});
		const 
OnGsyUZ = await BirdOraclesqzSxyZ.updatedChainRequest.call(uintAnzh7kf, uintAmEZy54, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUnz0s3G = await BirdOracle.new({from: accounts[4]});
		const addressGM5cB5b = accounts[4]
		const stringGnqdGTj = "2l26G1X2"
		const stringF1CHnYJ = "Vxx2G69bc3FVSyI9anOEGFPi9KgURTYbR7wWqo2jEGDk42b8co5S1fYhiffip4n"
		const uintv0tarYh = await BirdOracleUnz0s3G.getRatingByAddress.call(addressGM5cB5b, {from: accounts[4]});
		const uintCeJGpJr = await BirdOracleUnz0s3G.getRatingByAddressString.call(stringGnqdGTj, {from: accounts[2]});
		const stringUkcql8F = await BirdOracleUnz0s3G.extractAddress.call(stringF1CHnYJ, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uinttLIhelo = BigInt("11")
		const uintYaAIsET = BigInt("410")
		const stringzvlmeB0 = "1uDXGIaGjAvv34B4mbvMulFRVdttPNaGJ27KllVf9FxTfRCDl5yBwXitKmyzjGQlvqRaE1uLMcN"
		const uintcO3bMnZ = BigInt("916")
		const uintnrFnPQ = BigInt("657")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3dSXNlBobJJwl7fL1N"
		const uintCtxTRSu = BigInt("1107")
		const uintt3dTGqx = BigInt("1059")
		const stringSGnwUxP = "9eBSVld14W94Qjz4utpMMwlDxEqcoggjlx8pAeEuyFHqlx1y1LsVIcgLDbJ0YC2gSITXyj91Gh6tmnEv"
		const stringkrlFp3q = await BirdOracleA11KejQ.substring.call(stringzvlmeB0, uintYaAIsET, uinttLIhelo, {from: accounts[2]});
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uintnrFnPQ, uintcO3bMnZ, {from: accounts[0]});
		const stringVj5uUKC = await BirdOracleA11KejQ.substring.call(stringSGnwUxP, uintt3dTGqx, uintCtxTRSu, {from: accounts[3]});
		const uinthcwIM9j = await BirdOracleA11KejQ.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleUnz0s3G = await BirdOracle.new({from: accounts[4]});
		const uintVLqBBWJ = BigInt("1120")
		const uintp9T7CMh = BigInt("1644")
		const addressKPS5PVX = accounts[3]
		const uintBAUfNwt = await BirdOracleUnz0s3G.getRating.call({from: accounts[3]});
		const 
YMx1e19 = await BirdOracleUnz0s3G.updatedChainRequest.call(uintp9T7CMh, uintVLqBBWJ, {from: accounts[4]});
		const uintv0tarYh = await BirdOracleUnz0s3G.getRatingByAddress.call(addressKPS5PVX, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uintFfHeNzc = BigInt("1486")
		const stringTSRh3p = "XUUhqDK7jSxbph3iTxZpgeEeR1r4BXKzYVWhWrH9BSyhuny"
		const addressmBLUHrp = accounts[0]
		const uintwsVtHvm = BigInt("905")
		const uintJne3VrC = BigInt("772")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3diSXNlBobJJwl7fL1N"
		const stringfzEh2c = await BirdOracleA11KejQ.substring.call(stringTSRh3p, uintFfHeNzc, {from: accounts[5]});
		const uintf6pkfrR = await BirdOracleA11KejQ.getRatingByAddress.call(addressmBLUHrp, {from: accounts[1]});
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uintJne3VrC, uintwsVtHvm, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uintZoqaelO = BigInt("1100")
		const stringUFXyCnW = "thCXLNjbMSvhoZq6wB3xrpgDpOsEx5wqd6lVyCBlr3XmaEHuLzq9OAaYXAK3Bf2rGvR7Szv9eDIZNyXlitgUq7"
		const uintAuSoRTc = BigInt("916")
		const uintyAukciO = BigInt("664")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3dSXNlBobJJwl7fL1N"
		const stringYjGZtCR = "qZm3YY4b31XCg218RWFH7CiEjrDeTuQmk6b4NVuy3OLYf9r0WNDabqTQcCC47ugK63e7rswRrYWc"
		const stringURuMArW = await BirdOracleA11KejQ.substring.call(stringUFXyCnW, uintZoqaelO, {from: accounts[3]});
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uintyAukciO, uintAuSoRTc, {from: accounts[0]});
		const uintajHJfxr = await BirdOracleA11KejQ.getRatingByAddressString.call(stringYjGZtCR, {from: accounts[5]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uintKjuBtZ = BigInt("1744")
		const stringlG66TGR = "eJLUpySSaUwhBacR6VwOujyvNQW6h9f4aw8vehvPfhpuxVEAe2irAm2"
		const uintZ3qsapv = BigInt("916")
		const uint9EXs04 = BigInt("86")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3dSXNlBobJJwl7fL1N"
		const stringH84IApp = await BirdOracleA11KejQ.substring.call(stringlG66TGR, uintKjuBtZ, {from: "0x0000000000000000000000000000000000000001"});
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uint9EXs04, uintZ3qsapv, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleA11KejQ = await BirdOracle.new({from: accounts[1]});
		const uintswUmEvM = BigInt("871")
		const uintMbzu36n = BigInt("871")
		const stringSMp1JA6 = "kBbRQjB25HOGNhsb82336SqyTcw8dRhhTUFE8DjhXbMX3dSXNlBobJJwl7fL1N"
		const stringfz7HtjQ = await BirdOracleA11KejQ.substring.call(stringSMp1JA6, uintMbzu36n, uintswUmEvM, {from: accounts[0]});
	});
})