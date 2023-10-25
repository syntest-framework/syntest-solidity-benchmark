const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintpcWC4T = BigInt("999")
		const stringpMZOGB = "e"
		const stringCLsIyp = "M2I14rTicYaVd5uNodVICVSNgsWjMC2WbrLthUlqA8bzvPtEXPMz752CioVjvnVKYbHIPzgcjWgHiIy99Roy5TSD9PcOG"
		const GFCcfu6xGk = await GFC.new(uintpcWC4T, stringpMZOGB, stringCLsIyp, {from: accounts[0]});
		const uintaLEJUza = BigInt("817")
		const address0wlHee = accounts[1]
		const uintJ1Bxkmy = BigInt("301")
		const uintyBoiuo = BigInt("1949")
		const addresswb093aQ = accounts[0]
		const boolOAtPM3l = await GFCcfu6xGk.burnFrom.call(address0wlHee, uintaLEJUza, {from: accounts[3]});
		const boolkyUBcK9 = await GFCcfu6xGk.burn.call(uintJ1Bxkmy, {from: accounts[2]});
		const boolMXUfqr = await GFCcfu6xGk.burnFrom.call(addresswb093aQ, uintyBoiuo, {from: accounts[2]});

		await expect(GFCcfu6xGk.burnFrom.call(address0wlHee, uintaLEJUza, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintReJ1n5q = BigInt("591")
		const stringZzF9knh = "Sjk6KsmulcacbZui1o3uqPXHphBok0tmF56QKkECt8iYY6VbGKl0ZRbgmZH"
		const stringdeYfJry = "K2cUy1V8jnQRGP6jQKy8wVuu78nEMcZFQsrRoU5EtHhi5cRGGLwwtox9CS"
		const GFCFmEocE = await GFC.new(uintReJ1n5q, stringZzF9knh, stringdeYfJry, {from: accounts[3]});
		const uintEbbiKc7 = BigInt("1068")
		const addressDas3QL9 = accounts[2]
		const byteHuNZYWI = "0x191c1f1e1f10011616090f141d1c18180b200418081914130d05"
		const uintUrSdIrl = BigInt("159")
		const addresswpina0 = accounts[1]
		const boolcH6aFft = await GFCFmEocE.approve.call(addressDas3QL9, uintEbbiKc7, {from: accounts[4]});
		const boolNnJUvUP = await GFCFmEocE.approveAndCall.call(addresswpina0, uintUrSdIrl, byteHuNZYWI, {from: accounts[1]});

		assert.equal(boolcH6aFft, true)
		await expect(GFCFmEocE.approveAndCall.call(addresswpina0, uintUrSdIrl, byteHuNZYWI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintJT3TkF4 = BigInt("868")
		const stringtMbSqNG = "ahlcvVnwlMjKHllU8ABnnr9PnXS3nr7fYIAhKeQj8HM4QDS4785YUntgyRnBwxulok4AZTEdHM228OHlFYfBOPKPTK2sLaJQ"
		const stringL9edkU = "5UUX2j8gMM0Ld4VMbjTbCpOoSIpDUHuOAiPbpvGqDCDs1Bzbnt8UYiLN0txYn6wu4J5Q3KISIzigLvt5xa"
		const GFCyaNB7Ep = await GFC.new(uintJT3TkF4, stringtMbSqNG, stringL9edkU, {from: accounts[2]});
		const uintwBQ8x1S = BigInt("768")
		const uintX46bkCT = BigInt("1117")
		const addressrOVsmrv = accounts[2]
		const uintAy16jJ = BigInt("579")
		const addressbHiiQbD = accounts[0]
		const uintP87ig1H = BigInt("1624")
		const uintZHw7rX = BigInt("546")
		const boolh5Sw15H = await GFCyaNB7Ep.burn.call(uintwBQ8x1S, {from: accounts[0]});
		const boolZlNXLwx = await GFCyaNB7Ep.burnFrom.call(addressrOVsmrv, uintX46bkCT, {from: accounts[4]});
		const boolwvPx2sD = await GFCyaNB7Ep.burnFrom.call(addressbHiiQbD, uintAy16jJ, {from: accounts[1]});
		const boolTmKZDah = await GFCyaNB7Ep.burn.call(uintP87ig1H, {from: accounts[0]});
		const boolrt7QeUN = await GFCyaNB7Ep.burn.call(uintZHw7rX, {from: accounts[1]});

		await expect(GFCyaNB7Ep.burn.call(uintwBQ8x1S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintHOnPOb5 = BigInt("280")
		const stringzu8ghkh = "PDoypqnrfp9PHjyLip3D5"
		const stringVu9Dz0j = "mapUtd95qfHTWCLWqcUXHk5kT6yw0"
		const GFCMpnQBri = await GFC.new(uintHOnPOb5, stringzu8ghkh, stringVu9Dz0j, {from: accounts[4]});
		const uintsT1RqCc = BigInt("330")
		const addressCiZzAVs = "0x0000000000000000000000000000000000000001"
		const addressWbDd6oB = accounts[4]
		const uintRLy6Op = BigInt("721")
		const addresspnWNsU5 = accounts[4]
		const uintQiKBQiV = BigInt("1259")
		const addressHbRndW3 = accounts[0]
		const addressMBa23l3 = accounts[0]
		const byteiI9gQ6v = "0x182017030f0717080809170d070f17030409161c"
		const uintNa9CqI7 = BigInt("797")
		const addressOWEUa5f = accounts[1]
		const byteqa23LZr = "0x0b091f1c031a200a0311120217"
		const uintgQ3bYaH = BigInt("366")
		const addressbsoqDb = "0x0000000000000000000000000000000000000001"
		const uintxiAyHBX = BigInt("623")
		const boolu1eE3Du = await GFCMpnQBri.transferFrom.call(addressWbDd6oB, addressCiZzAVs, uintsT1RqCc, {from: accounts[0]});
		const boolKvmkM67 = await GFCMpnQBri.approve.call(addresspnWNsU5, uintRLy6Op, {from: accounts[2]});
		const boolEXXzYI = await GFCMpnQBri.transferFrom.call(addressMBa23l3, addressHbRndW3, uintQiKBQiV, {from: accounts[2]});
		const boolnVfR2Yb = await GFCMpnQBri.approveAndCall.call(addressOWEUa5f, uintNa9CqI7, byteiI9gQ6v, {from: accounts[1]});
		const boolgMoFWLy = await GFCMpnQBri.approveAndCall.call(addressbsoqDb, uintgQ3bYaH, byteqa23LZr, {from: accounts[1]});
		const booliZ2WrO = await GFCMpnQBri.burn.call(uintxiAyHBX, {from: accounts[2]});

		await expect(GFCMpnQBri.transferFrom.call(addressWbDd6oB, addressCiZzAVs, uintsT1RqCc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintpfZQKoj = BigInt("1245")
		const stringVKt3WNM = "NpBppSYvnfTwgsuHwANZEve5SPjC5ddDiBjXGwUXn7AQpbcur7BKBfdWS1UP9UEDddGmfqmjF"
		const stringxTboiUS = "SyJkwJqQMNkgi4FEWqdEdsr6Kw49z8XqhtNB2bcYmuuLccStQ6rN19DA7ohx7OntvwLir8Q82BLQPQqnuoQf4"
		const GFCCkNdfgz = await GFC.new(uintpfZQKoj, stringVKt3WNM, stringxTboiUS, {from: "0x0000000000000000000000000000000000000001"});
		const byteZIQ1W41 = "0x070b0f0f1d130c1e020e0a1f0c020f1d171a1b1707151a05050f10081a09"
		const uintyXXa2QW = BigInt("805")
		const address0R9RgA = accounts[2]
		const uintfJAbLf0 = BigInt("1559")
		const addressF9QBbwM = accounts[3]
		const byteLIxN5FP = "0x10171d1918080a1f0f0d06011613061e12"
		const uintF1wo6Od = BigInt("46")
		const addresstp5DiQ2 = accounts[1]
		const uintJFkhuQQ = BigInt("666")
		const addressvvod3km = accounts[5]
		const boolTVHv8g = await GFCCkNdfgz.approveAndCall.call(address0R9RgA, uintyXXa2QW, byteZIQ1W41, {from: accounts[1]});
		const boolWEOmFij = await GFCCkNdfgz.approve.call(addressF9QBbwM, uintfJAbLf0, {from: accounts[4]});
		const boolxJzA2P = await GFCCkNdfgz.approveAndCall.call(addresstp5DiQ2, uintF1wo6Od, byteLIxN5FP, {from: accounts[2]});
		const boollXIUG1k = await GFCCkNdfgz.approve.call(addressvvod3km, uintJFkhuQQ, {from: accounts[2]});
	});

	it('test for GFC', async () => {
		const uintfJEqU3z = BigInt("1857")
		const stringQ3nf7iB = "Wgmez7PcHUVgx8dKMmLD9qItKnOWtPIvO"
		const stringAtZ3dZ3 = "gbYc"
		const GFCWXFRigh = await GFC.new(uintfJEqU3z, stringQ3nf7iB, stringAtZ3dZ3, {from: accounts[1]});
		const uintthZCXi8 = BigInt("487")
		const addressBnJHGtC = accounts[4]
		const uintAPo2Nh1 = BigInt("1543")
		const addressZN1whp1 = accounts[1]
		const uintX8ekU9V = BigInt("1770")
		const boolZSGThFU = await GFCWXFRigh.transfer.call(addressBnJHGtC, uintthZCXi8, {from: accounts[0]});
		const booltA7PWp8 = await GFCWXFRigh.burnFrom.call(addressZN1whp1, uintAPo2Nh1, {from: "0x0000000000000000000000000000000000000001"});
		const boolfEvoCO0 = await GFCWXFRigh.burn.call(uintX8ekU9V, {from: accounts[5]});

		await expect(GFCWXFRigh.transfer.call(addressBnJHGtC, uintthZCXi8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})