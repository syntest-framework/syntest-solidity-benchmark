const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintO35F0lX = BigInt("1644")
		const stringqtsMYKW = "lJqpTTYNgUnqmuXITiEVcxA96914acKGpKphfmk0y3fjS183VGWd0Xi"
		const stringZW8Yx9l = "N5mKxF0eDakfuxuhQGPWKwxtT8FHCChPeS0rmQHlDZ7J6P"
		const GFChRmGdtj = await GFC.new(uintO35F0lX, stringqtsMYKW, stringZW8Yx9l, {from: accounts[2]});
		const uintU9DlIwK = BigInt("682")
		const addressFZh8n7g = accounts[1]
		const bytebJv3Li = "0x0e13"
		const uintKY3YBOb = BigInt("1794")
		const addresshAVWoNz = accounts[0]
		const byteCVj9ZTp = "0x1a120d150b130816"
		const uintDQyywYu = BigInt("1913")
		const addressoBaRQx = accounts[2]
		const bytejaHRIB = "0x02171e07191a0b0a1812180f01101315080714140c091a031b040f151a050d"
		const uintyg8ty6 = BigInt("1717")
		const addressbvaaNZ7 = accounts[1]
		const uinttcRul5Q = BigInt("1638")
		const boolbll3eRg = await GFChRmGdtj.approve.call(addressFZh8n7g, uintU9DlIwK, {from: accounts[2]});
//		const boolxZsFNan = await GFChRmGdtj.approveAndCall.call(addresshAVWoNz, uintKY3YBOb, bytebJv3Li, {from: accounts[1]});
//		const boolh5t6Kk4 = await GFChRmGdtj.approveAndCall.call(addressoBaRQx, uintDQyywYu, byteCVj9ZTp, {from: accounts[0]});
//		const boolg0bgXoG = await GFChRmGdtj.approveAndCall.call(addressbvaaNZ7, uintyg8ty6, bytejaHRIB, {from: accounts[5]});
//		const boolEqYP7ir = await GFChRmGdtj.burn.call(uinttcRul5Q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbll3eRg, true)
		await expect(GFChRmGdtj.approveAndCall.call(addresshAVWoNz, uintKY3YBOb, bytebJv3Li, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintbiUaF7H = BigInt("73")
		const stringTfLFCzH = "cbgSVqPGMRXG46zyzlNEEEcT0"
		const stringUdwGwaC = "6fpdiRWa"
		const GFCFN4jiMh = await GFC.new(uintbiUaF7H, stringTfLFCzH, stringUdwGwaC, {from: "0x0000000000000000000000000000000000000001"});
		const bytekhLLiNY = "0x071219191b100c000d081812061a16081516"
		const uintaIgrrg = BigInt("1194")
		const addressQVzP7sD = accounts[0]
		const uintyI7iLkf = BigInt("1463")
		const addressSoh2xC = accounts[1]
		const addressoAiE6B1 = "0x0000000000000000000000000000000000000001"
		const uinttJhmjdg = BigInt("1889")
		const addressT8k9e1s = accounts[1]
		const uintecFSieb = BigInt("899")
		const addressiCYp3xw = accounts[1]
		const addressLcYBYqf = accounts[3]
		const uintfP76rJz = BigInt("483")
		const uintjJfci5 = BigInt("889")
		const addressCumxH8I = accounts[0]
		const booln2LIV1r = await GFCFN4jiMh.approveAndCall.call(addressQVzP7sD, uintaIgrrg, bytekhLLiNY, {from: accounts[4]});
		const boolMd0onM = await GFCFN4jiMh.transferFrom.call(addressoAiE6B1, addressSoh2xC, uintyI7iLkf, {from: accounts[4]});
		const boolkvSboZp = await GFCFN4jiMh.burnFrom.call(addressT8k9e1s, uinttJhmjdg, {from: accounts[0]});
		const boolTT79Wdg = await GFCFN4jiMh.transferFrom.call(addressLcYBYqf, addressiCYp3xw, uintecFSieb, {from: accounts[3]});
		const boolXV7I2RU = await GFCFN4jiMh.burn.call(uintfP76rJz, {from: accounts[2]});
		const boolgiOtrtu = await GFCFN4jiMh.approve.call(addressCumxH8I, uintjJfci5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GFC', async () => {
		const uintMjX1K5x = BigInt("1468")
		const stringtYezosO = "oiyUj6m2NSfruH0vKsyU5CcENf73pRLcCmPzqbmxsIimTXPwqqIi"
		const stringeyOP3tt = "aZz2rvBTAj8VEDJxgVU33j7q9T2O7lP9Um1uMWHrX5urLNq5AW4HgdxsciwCpFfLaGcIsHOUbqBz6bFggqd75TyBI64RU"
		const GFCYYiRZR = await GFC.new(uintMjX1K5x, stringtYezosO, stringeyOP3tt, {from: accounts[0]});
		const uintMrmxKQR = BigInt("522")
		const addressZiHHTH2 = accounts[1]
		const uintFgQVxNl = BigInt("387")
		const addressGlzKqd = accounts[2]
		const addressD9K7PrV = accounts[0]
		const uintV0I21ED = BigInt("1207")
		const addressXbwDZuA = accounts[5]
		const uintdI55VN = BigInt("898")
		const addressOWWtEmF = accounts[3]
		const addressIbAY6Sx = accounts[3]
//		const boolET6lWVa = await GFCYYiRZR.burnFrom.call(addressZiHHTH2, uintMrmxKQR, {from: accounts[5]});
//		const boolzsguld = await GFCYYiRZR.transferFrom.call(addressD9K7PrV, addressGlzKqd, uintFgQVxNl, {from: accounts[5]});
//		const boolv2b0oAb = await GFCYYiRZR.approve.call(addressXbwDZuA, uintV0I21ED, {from: "0x0000000000000000000000000000000000000001"});
//		const booljv4zCV6 = await GFCYYiRZR.transferFrom.call(addressIbAY6Sx, addressOWWtEmF, uintdI55VN, {from: accounts[5]});

		await expect(GFCYYiRZR.burnFrom.call(addressZiHHTH2, uintMrmxKQR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintHpucIlZ = BigInt("1677")
		const stringf6C5tlD = "RM6TbaXzuJ8pf8vDed2gpaSJKnuudOQSuwz2ZKgrh6l4MBRvNmGtvK3jq4DgQzzn3XUK75pM63WuVtvRt7X87XMcFXSnP4X3u"
		const stringL0wotJt = "WKMGS42yPhaKiuUlOr3RAegFeOKQxhlqz34h6ZPfEoDOymbZ58lmUw77IojDirT7hbnT"
		const GFCcMV8vM = await GFC.new(uintHpucIlZ, stringf6C5tlD, stringL0wotJt, {from: accounts[4]});
		const uintW0tuk1I = BigInt("335")
		const uintl6M5yR = BigInt("1962")
		const addressa47wOXW = accounts[2]
		const uintBTUNg7l = BigInt("1128")
//		const boolYBPvpJo = await GFCcMV8vM.burn.call(uintW0tuk1I, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCYuEtW2 = await GFCcMV8vM.burnFrom.call(addressa47wOXW, uintl6M5yR, {from: accounts[1]});
//		const boolTpavfd = await GFCcMV8vM.burn.call(uintBTUNg7l, {from: accounts[2]});

		await expect(GFCcMV8vM.burn.call(uintW0tuk1I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintlQ03xEe = BigInt("355")
		const stringMDWmnq = "hJk2L2Axw98KchtpeJI6"
		const stringgQYggUS = "YzGjhTAqv2MKfyitB3WWSx8PAl4TRygPwCNd1LJfSwsMFLaJyb7cWOz1B4f9LU6zQM3xqrssLv1vTjXsxKPuoolQ6"
		const GFCU6yHNK0 = await GFC.new(uintlQ03xEe, stringMDWmnq, stringgQYggUS, {from: accounts[4]});
		const uintLWGVokV = BigInt("1590")
		const uintj5nsSG4 = BigInt("729")
		const addressHl6tLcs = "0x0000000000000000000000000000000000000001"
		const addressWQKQ5R5 = accounts[2]
		const uintthafNi = BigInt("1595")
		const addresstPr1u0N = accounts[4]
		const addressvFWF8Jg = accounts[4]
		const boolDiVwWCs = await GFCU6yHNK0.burn.call(uintLWGVokV, {from: accounts[4]});
//		const boolY0uD8NI = await GFCU6yHNK0.transferFrom.call(addressWQKQ5R5, addressHl6tLcs, uintj5nsSG4, {from: accounts[4]});
//		const boolOthVVe = await GFCU6yHNK0.transferFrom.call(addressvFWF8Jg, addresstPr1u0N, uintthafNi, {from: accounts[3]});

		assert.equal(boolDiVwWCs, true)
		await expect(GFCU6yHNK0.transferFrom.call(addressWQKQ5R5, addressHl6tLcs, uintj5nsSG4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintjfEugpm = BigInt("299")
		const stringuTdle5C = "IbYT96K7Fj7FdDN0LDsGic5RwmXWYgxzm1ycPCqAT3skkJHkeYNhz4CSlvaurJsWVhQH4z"
		const stringWpvBSWr = "VLRwkQIVWU6loZtMoDAlTegprRPHloXiO4Add9a8AI1WWEIiTjXElvWNAYExEYQeclYL8eDRW8WenT7D12SbWLpP"
		const GFCw2vDIm9 = await GFC.new(uintjfEugpm, stringuTdle5C, stringWpvBSWr, {from: accounts[0]});
		const uintpIhGKr5 = BigInt("49")
		const addressw9NzwEj = accounts[2]
		const byterJIxQo8 = "0x150808051a0b080311100900071c001d1a120f"
		const uint2aRNQI = BigInt("626")
		const addressgBi4OkM = accounts[3]
		const uintppXfKEU = BigInt("240")
		const addressaGBirmC = accounts[3]
//		const boolKoYNXex = await GFCw2vDIm9.transfer.call(addressw9NzwEj, uintpIhGKr5, {from: accounts[4]});
//		const boolRojStCH = await GFCw2vDIm9.approveAndCall.call(addressgBi4OkM, uint2aRNQI, byterJIxQo8, {from: accounts[5]});
//		const boolIFN1RWs = await GFCw2vDIm9.burnFrom.call(addressaGBirmC, uintppXfKEU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCw2vDIm9.transfer.call(addressw9NzwEj, uintpIhGKr5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintG1yxR4o = BigInt("355")
		const stringMDWmnq = "hJk2L2Axw98KchtpeJI6"
		const stringgQYggUS = "YzGjhTAqv2MKfyitB3WWSx8PAl4TRygPwCNd1LJfSwsMFLaJyb7cWOz1B4f9LU6zQM3xqrssLv1vTjXsxKPuoolQ6"
		const GFCU6yHNK0 = await GFC.new(uintG1yxR4o, stringMDWmnq, stringgQYggUS, {from: accounts[4]});
		const uintlzu6Tts = BigInt("428")
		const addressRvhMJm = accounts[3]
		const uintvtGG4Y = BigInt("1595")
		const addressrzOY6Tx = accounts[5]
		const addressNLUW4g3 = accounts[4]
		const byteU58eb40 = "0x111c0e18170c0f02170a1f1f021b060e01031d1a"
		const uintfzZnLVk = BigInt("1642")
		const addressJnt1alV = accounts[0]
		const booleTylNlr = await GFCU6yHNK0.transfer.call(addressRvhMJm, uintlzu6Tts, {from: accounts[4]});
//		const boolOthVVe = await GFCU6yHNK0.transferFrom.call(addressNLUW4g3, addressrzOY6Tx, uintvtGG4Y, {from: accounts[3]});
//		const boolgcDeEnL = await GFCU6yHNK0.approveAndCall.call(addressJnt1alV, uintfzZnLVk, byteU58eb40, {from: accounts[3]});

		assert.equal(booleTylNlr, true)
		await expect(GFCU6yHNK0.transferFrom.call(addressNLUW4g3, addressrzOY6Tx, uintvtGG4Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKrGHjE = BigInt("395")
		const stringEKFY0bx = "vXe7a2rHnPyuF4EcwqRzOc62sfKgSd0y2pW59r4MBG7MRZNBCh11siSecvhk3eYK"
		const stringYJMokse = "pZdqcyRYq35e2XxfIB5wcg6QLGJznMB4DrBItN9sQm4WxOaL"
		const GFCKCoJ2cn = await GFC.new(uintKrGHjE, stringEKFY0bx, stringYJMokse, {from: accounts[2]});
		const uintEQIg82n = BigInt("1247")
		const addressNobhCbd = accounts[3]
		const uint5jQasd = BigInt("559")
		const addressLvVy4IF = "0x00000000000000000000000000000000000000-1"
		const uintn60aBtK = BigInt("1958")
		const addressmsunUpr = "0x0000000000000000000000000000000000000002"
		const bytetGPs16y = "0x08041a0f021d0408101a15010e0e101f0c17101c1f0e070106"
		const uintB7NYat6 = BigInt("166")
		const addressuORx7Yd = accounts[1]
		const uintJVsWe8F = BigInt("1931")
		const uintiFAB2Zo = BigInt("900")
		const addressQikSI0k = accounts[1]
		const booleoNQhR = await GFCKCoJ2cn.approve.call(addressNobhCbd, uintEQIg82n, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzlbpdh = await GFCKCoJ2cn.burnFrom.call(addressLvVy4IF, uint5jQasd, {from: accounts[0]});
//		const bool6qNUYR = await GFCKCoJ2cn.burnFrom.call(addressmsunUpr, uintn60aBtK, {from: accounts[0]});
//		const boolb34poAt = await GFCKCoJ2cn.approveAndCall.call(addressuORx7Yd, uintB7NYat6, bytetGPs16y, {from: accounts[4]});
//		const boolQ0xwJwI = await GFCKCoJ2cn.burn.call(uintJVsWe8F, {from: accounts[0]});
//		const boollszrzIf = await GFCKCoJ2cn.approve.call(addressQikSI0k, uintiFAB2Zo, {from: accounts[5]});

		assert.equal(booleoNQhR, true)
		await expect(GFCKCoJ2cn.burnFrom.call(addressLvVy4IF, uint5jQasd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintoapONtq = BigInt("243")
		const stringUtDkOi1 = "lhoUJ4YiTboxiEi7M55GgD22BDaG3gFAteDlJ8lWSlCYPu4wS6Oyw4AowFtrWhuc4uttO595g"
		const stringtODDUeK = "QqcTblI38nPAzmoIdQMrsKFeXyV8xhk6Wcd6DMlBeNLNSu1KhxQdm2uvniWW1Y77DUdmP7"
		const GFCXXapUsY = await GFC.new(uintoapONtq, stringUtDkOi1, stringtODDUeK, {from: accounts[4]});
		const uinty6trBLS = BigInt("1653")
		const addressRA6UuF = accounts[4]
		const uintRis9cuV = BigInt("934")
		const addressxCcsDc = "0x0000000000000000000000000000000000000001"
		const uintL9CufXq = BigInt("329")
		const addressKvs7Tpo = accounts[1]
		const uintTe8nYDP = BigInt("1805")
		const addresslGklYh0 = accounts[2]
		const addressT5SyR48 = accounts[2]
		const uintQw5I4jX = BigInt("1144")
		const addressaKjzenj = accounts[3]
		const addressJKyWRn4 = accounts[5]
		const uintdr0bups = BigInt("1950")
		const addressSS27PYh = "0x0000000000000000000000000000000000000001"
//		const bool0T2996 = await GFCXXapUsY.burnFrom.call(addressRA6UuF, uinty6trBLS, {from: accounts[3]});
//		const boolRgDSACt = await GFCXXapUsY.transfer.call(addressxCcsDc, uintRis9cuV, {from: accounts[1]});
//		const boolY5DI9YY = await GFCXXapUsY.approve.call(addressKvs7Tpo, uintL9CufXq, {from: accounts[0]});
//		const boolfgAzRvz = await GFCXXapUsY.transferFrom.call(addressT5SyR48, addresslGklYh0, uintTe8nYDP, {from: accounts[4]});
//		const boolb0J5D7 = await GFCXXapUsY.transferFrom.call(addressJKyWRn4, addressaKjzenj, uintQw5I4jX, {from: accounts[4]});
//		const boolM9ao9xS = await GFCXXapUsY.approve.call(addressSS27PYh, uintdr0bups, {from: accounts[0]});

		await expect(GFCXXapUsY.burnFrom.call(addressRA6UuF, uinty6trBLS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})