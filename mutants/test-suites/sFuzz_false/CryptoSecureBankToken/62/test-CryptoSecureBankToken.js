const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend75qvf = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNEyyxbz = accounts[1]
		const addressLTb0S7j = accounts[1]
		const addressCgoq1fp = accounts[2]
		const addressNiy6GvI = accounts[5]
		const boolCakZR46 = await CryptoSecureBankTokend75qvf.getBlackListStatus.call(addressNEyyxbz, {from: accounts[3]});
		const addresswXp4F6V = await CryptoSecureBankTokend75qvf.destroyBlackFunds.call(addressLTb0S7j, {from: accounts[0]});
		await CryptoSecureBankTokend75qvf.onlyOwner.call({from: accounts[0]});
		const addresspwsp1hf = await CryptoSecureBankTokend75qvf.setOwner2.call(addressCgoq1fp, {from: accounts[5]});
		const addressdCgeOAu = await CryptoSecureBankTokend75qvf.addBlackList.call(addressNiy6GvI, {from: accounts[2]});
		await CryptoSecureBankTokend75qvf.unpause.call({from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJfjQtv1 = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressSjDbR3J = accounts[0]
		const addressSAaYDeC = accounts[3]
		const booltxp2fvz = await CryptoSecureBankTokenJfjQtv1.getBlackListStatus.call(addressSjDbR3J, {from: accounts[3]});
		const boolabmsdlN = await CryptoSecureBankTokenJfjQtv1.getBlackListStatus.call(addressSAaYDeC, {from: accounts[1]});
//		await CryptoSecureBankTokenJfjQtv1.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolabmsdlN, false)
		assert.equal(booltxp2fvz, false)
		await expect(CryptoSecureBankTokenJfjQtv1.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwMUjO1V = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressPOCMboA = accounts[4]
//		const boolXDUSBHk = await CryptoSecureBankTokenwMUjO1V.deprecate.call(addressPOCMboA, {from: accounts[3]});
//		const uintlYJszwu = await CryptoSecureBankTokenwMUjO1V.totalSupply.call({from: accounts[1]});

		await expect(CryptoSecureBankTokenwMUjO1V.deprecate.call(addressPOCMboA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOez1K3I = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressRXLTxwg = accounts[4]
		const addresstdKWeAb = accounts[1]
		const addresseuuUUX = accounts[0]
		const addressqh0xbAx = accounts[3]
		const addressQqmLtvh = accounts[1]
		const addressNq7STLk = accounts[1]
		const addressrUgRAEw = accounts[1]
		const uintdXMOS3B = await CryptoSecureBankTokenOez1K3I.allowance.call(addresstdKWeAb, addressRXLTxwg, {from: accounts[3]});
		const boolqgWFTi2 = await CryptoSecureBankTokenOez1K3I.getBlackListStatus.call(addresseuuUUX, {from: accounts[3]});
//		const boolzzAHIQt = await CryptoSecureBankTokenOez1K3I.deprecate.call(addressqh0xbAx, {from: accounts[3]});
//		const uintS97IAn = await CryptoSecureBankTokenOez1K3I.allowance.call(addressNq7STLk, addressQqmLtvh, {from: accounts[1]});
//		const uintkXw2OVd = await CryptoSecureBankTokenOez1K3I.balanceOf.call(addressrUgRAEw, {from: accounts[2]});
//		await CryptoSecureBankTokenOez1K3I.unpause.call({from: accounts[3]});

		assert.equal(boolqgWFTi2, false)
		assert.equal(uintdXMOS3B, BigInt("0"))
		await expect(CryptoSecureBankTokenOez1K3I.deprecate.call(addressqh0xbAx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOez1K3I = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressPXa1KX5 = accounts[4]
		const addresskljYCB5 = accounts[1]
		const uintDnFWkmh = BigInt("86")
		const addressMef61XI = accounts[2]
		const addressPxbyEa = accounts[2]
		const addressgWV4D4y = accounts[0]
		const addressHDuobDi = accounts[1]
		const addressv4Y6dzU = accounts[1]
		const addressfyrAoZ0 = accounts[1]
		const uintMX1TuY = BigInt("295")
		const addressXRVYp5F = accounts[1]
		const uintdXMOS3B = await CryptoSecureBankTokenOez1K3I.allowance.call(addresskljYCB5, addressPXa1KX5, {from: accounts[3]});
//		const boolkqydxjt = await CryptoSecureBankTokenOez1K3I.transferFrom.call(addressPxbyEa, addressMef61XI, uintDnFWkmh, {from: accounts[0]});
//		const boolqgWFTi2 = await CryptoSecureBankTokenOez1K3I.getBlackListStatus.call(addressgWV4D4y, {from: accounts[3]});
//		const uintS97IAn = await CryptoSecureBankTokenOez1K3I.allowance.call(addressv4Y6dzU, addressHDuobDi, {from: accounts[1]});
//		const uintkXw2OVd = await CryptoSecureBankTokenOez1K3I.balanceOf.call(addressfyrAoZ0, {from: accounts[2]});
//		const boollTqsa61 = await CryptoSecureBankTokenOez1K3I.transfer.call(addressXRVYp5F, uintMX1TuY, {from: accounts[0]});
//		await CryptoSecureBankTokenOez1K3I.unpause.call({from: accounts[3]});

		assert.equal(uintdXMOS3B, BigInt("0"))
		await expect(CryptoSecureBankTokenOez1K3I.transferFrom.call(addressPxbyEa, addressMef61XI, uintDnFWkmh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhTPVD3m = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintCgPq8t5 = BigInt("1439")
		const addressQnKylzK = accounts[0]
		const addressJxpVf3I = accounts[0]
		const addressGqHaFEq = accounts[3]
		const addressOHTox5 = await CryptoSecureBankTokenhTPVD3m.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolqgLvmbt = await CryptoSecureBankTokenhTPVD3m.redeem.call(uintCgPq8t5, {from: accounts[3]});
//		const addressX1AGiz3 = await CryptoSecureBankTokenhTPVD3m.transferOwnership.call(addressQnKylzK, {from: "0x0000000000000000000000000000000000000001"});
//		const uintQgo34Zk = await CryptoSecureBankTokenhTPVD3m.allowance.call(addressGqHaFEq, addressJxpVf3I, {from: accounts[0]});

		assert.equal(addressOHTox5, 0x09077879bb188D2C2Be5c61df06Af59D28b499F0)
		await expect(CryptoSecureBankTokenhTPVD3m.redeem.call(uintCgPq8t5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhTPVD3m = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressZrHE2PG = accounts[0]
		const addressRNXNXBp = accounts[0]
		const addressmEofl6W = accounts[3]
		const addressOHTox5 = await CryptoSecureBankTokenhTPVD3m.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressX1AGiz3 = await CryptoSecureBankTokenhTPVD3m.transferOwnership.call(addressZrHE2PG, {from: "0x0000000000000000000000000000000000000001"});
//		const uintQgo34Zk = await CryptoSecureBankTokenhTPVD3m.allowance.call(addressmEofl6W, addressRNXNXBp, {from: accounts[0]});

		assert.equal(addressOHTox5, 0x09077879bb188D2C2Be5c61df06Af59D28b499F0)
		await expect(CryptoSecureBankTokenhTPVD3m.transferOwnership.call(addressZrHE2PG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOez1K3I = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintiTNbpah = BigInt("1889")
		const addressV3v4sD6 = accounts[0]
		const uintlnm5eRk = BigInt("91")
		const addresssyuYwx = accounts[2]
		const addressQLSfb9f = accounts[2]
		const addressXY1OHJb = accounts[0]
		const addressAWPKafR = accounts[1]
		const addressGA3lzPy = accounts[2]
		const uintst9G3D0 = BigInt("295")
		const addresscc3mfWN = accounts[1]
//		const booll9XVzo0 = await CryptoSecureBankTokenOez1K3I.transfer.call(addressV3v4sD6, uintiTNbpah, {from: accounts[0]});
//		const boolkqydxjt = await CryptoSecureBankTokenOez1K3I.transferFrom.call(addressQLSfb9f, addresssyuYwx, uintlnm5eRk, {from: accounts[0]});
//		const boolqgWFTi2 = await CryptoSecureBankTokenOez1K3I.getBlackListStatus.call(addressXY1OHJb, {from: accounts[3]});
//		const uintS97IAn = await CryptoSecureBankTokenOez1K3I.allowance.call(addressGA3lzPy, addressAWPKafR, {from: accounts[1]});
//		const boollTqsa61 = await CryptoSecureBankTokenOez1K3I.transfer.call(addresscc3mfWN, uintst9G3D0, {from: accounts[0]});
//		await CryptoSecureBankTokenOez1K3I.unpause.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenOez1K3I.transfer.call(addressV3v4sD6, uintiTNbpah, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwMUjO1V = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintlYJszwu = await CryptoSecureBankTokenwMUjO1V.totalSupply.call({from: accounts[1]});

		assert.equal(uintlYJszwu, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeniELicJ = await CryptoSecureBankToken.new({from: accounts[1]});
		const uinty040i2 = BigInt("1796")
		const addressgzfxAbr = accounts[4]
		const addressPUWdBnM = accounts[2]
		const uintoNCNu4 = BigInt("2047")
		const uintt75cBca = BigInt("1581")
		const addressOoe6qZ = accounts[2]
		const boolLaKL7Ua = await CryptoSecureBankTokeniELicJ.approve.call(addressgzfxAbr, uinty040i2, {from: accounts[0]});
		const addressXaBpHoB = await CryptoSecureBankTokeniELicJ.getOwner.call({from: accounts[3]});
//		const addressx4rPVGT = await CryptoSecureBankTokeniELicJ.removeBlackList.call(addressPUWdBnM, {from: accounts[0]});
//		const boolUd0TjP1 = await CryptoSecureBankTokeniELicJ.redeem.call(uintoNCNu4, {from: accounts[1]});
//		const boolddSpl8x = await CryptoSecureBankTokeniELicJ.transfer.call(addressOoe6qZ, uintt75cBca, {from: accounts[1]});

		assert.equal(addressXaBpHoB, 0x03C5B0aB86c943AAe8b7265f1073ab8eDf799c8f)
		assert.equal(boolLaKL7Ua, true)
		await expect(CryptoSecureBankTokeniELicJ.removeBlackList.call(addressPUWdBnM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressHi6nAR = accounts[2]
		const addressjfvxYZA = accounts[4]
		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addressjfvxYZA, addressHi6nAR, {from: accounts[0]});
//		await CryptoSecureBankTokenma83MU.pause.call({from: accounts[1]});

		assert.equal(uintFuhnPKs, BigInt("0"))
		await expect(CryptoSecureBankTokenma83MU.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressFLqBfl3 = accounts[2]
		const uintMH1ybj = BigInt("1160")
		const addressjSxlj1C = accounts[2]
		const addressfG7lxoH = accounts[0]
		const addresszwW2rbo = accounts[2]
		const addressP2Uzu2 = accounts[6]
		const uintlXf3Xhy = await CryptoSecureBankTokenma83MU.balanceOf.call(addressFLqBfl3, {from: accounts[2]});
//		const boolQCmW3Vu = await CryptoSecureBankTokenma83MU.transferFrom.call(addressfG7lxoH, addressjSxlj1C, uintMH1ybj, {from: accounts[0]});
//		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addressP2Uzu2, addresszwW2rbo, {from: accounts[0]});

		assert.equal(uintlXf3Xhy, BigInt("0"))
		await expect(CryptoSecureBankTokenma83MU.transferFrom.call(addressfG7lxoH, addressjSxlj1C, uintMH1ybj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressVt5QXKb = accounts[2]
		const addressy5lkEu6 = accounts[7]
		const addresswdhrGJF = accounts[3]
		const addressaqBTdoX = accounts[1]
		const addressGWzx6eD = accounts[1]
		const addressguWaSgJ = accounts[1]
		const addressAACGbI9 = accounts[0]
		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addressy5lkEu6, addressVt5QXKb, {from: accounts[0]});
		const addressIjUIjx7 = await CryptoSecureBankTokenma83MU.setOwner2.call(addresswdhrGJF, {from: accounts[1]});
//		const addressVFjZbs1 = await CryptoSecureBankTokenma83MU.transferOwnership.call(addressaqBTdoX, {from: accounts[0]});
//		const uintTV13cC0 = await CryptoSecureBankTokenma83MU.allowance.call(addressguWaSgJ, addressGWzx6eD, {from: accounts[4]});
//		const addressbf9A1YC = await CryptoSecureBankTokenma83MU.removeBlackList.call(addressAACGbI9, {from: accounts[2]});

		assert.equal(uintFuhnPKs, BigInt("0"))
		await expect(CryptoSecureBankTokenma83MU.transferOwnership.call(addressaqBTdoX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressImO24eY = accounts[5]
		const uintyTA3s0P = BigInt("633")
		const addresscqDNqku = accounts[4]
		const addressgICiClV = accounts[1]
		const boolVatNA2g = await CryptoSecureBankTokenma83MU.deprecate.call(addressImO24eY, {from: accounts[1]});
//		await CryptoSecureBankTokenma83MU.pause.call({from: accounts[0]});
//		const boolHp6pf28 = await CryptoSecureBankTokenma83MU.transferFrom.call(addressgICiClV, addresscqDNqku, uintyTA3s0P, {from: accounts[4]});

		assert.equal(boolVatNA2g, true)
		await expect(CryptoSecureBankTokenma83MU.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvG1a6jy = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressIaM3jDc = accounts[4]
		const addressZ5yfl2 = accounts[3]
		const addressBqlGh9X = accounts[0]
		const addresscuN9tc = await CryptoSecureBankTokenvG1a6jy.addBlackList.call(addressIaM3jDc, {from: accounts[4]});
		const uintGAVJKu6 = await CryptoSecureBankTokenvG1a6jy.balanceOf.call(addressZ5yfl2, {from: accounts[2]});
//		await CryptoSecureBankTokenvG1a6jy.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressMrdO1Sv = await CryptoSecureBankTokenvG1a6jy.setOwner2.call(addressBqlGh9X, {from: accounts[1]});

		assert.equal(uintGAVJKu6, BigInt("0"))
		await expect(CryptoSecureBankTokenvG1a6jy.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOLYUFB0 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressVPcNGku = accounts[3]
		const addressgsvqTLA = accounts[4]
		const uintEmcqomA = await CryptoSecureBankTokenOLYUFB0.balanceOf.call(addressVPcNGku, {from: accounts[2]});
		const addressCmFbWK5 = await CryptoSecureBankTokenOLYUFB0.removeBlackList.call(addressgsvqTLA, {from: accounts[3]});
//		await CryptoSecureBankTokenOLYUFB0.unpause.call({from: accounts[4]});

		assert.equal(uintEmcqomA, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenOLYUFB0.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressZdn53H9 = accounts[2]
		const addressSeRVloE = accounts[7]
		const addressQ6Ieq05 = accounts[2]
		const addressTpJfJoL = accounts[2]
		const addressgjNObws = accounts[4]
		const uintLG0HyEj = BigInt("620")
		const uintaafPdKy = BigInt("560")
		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addressSeRVloE, addressZdn53H9, {from: accounts[0]});
		const boollVFZXMe = await CryptoSecureBankTokenma83MU.deprecate.call(addressQ6Ieq05, {from: accounts[1]});
		const uint3QbyTt = await CryptoSecureBankTokenma83MU.allowance.call(addressgjNObws, addressTpJfJoL, {from: "0x0000000000000000000000000000000000000001"});
//		const uintfJoYLEc = await CryptoSecureBankTokenma83MU.setParams.call(uintaafPdKy, uintLG0HyEj, {from: accounts[1]});

		assert.equal(boollVFZXMe, true)
		assert.equal(uint3QbyTt, BigInt("0"))
		assert.equal(uintFuhnPKs, BigInt("0"))
		await expect(CryptoSecureBankTokenma83MU.setParams.call(uintaafPdKy, uintLG0HyEj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintroMEFq6 = BigInt("196")
		const addressTlLRNOI = accounts[1]
		const uint3IgqOG = BigInt("248")
		const addressWhgbApn = accounts[1]
		const addressA5n6zbB = accounts[1]
		const addressjXSaI93 = accounts[2]
		const addresss6GlbQu = accounts[6]
		const boolbJrgB4 = await CryptoSecureBankTokenma83MU.transfer.call(addressTlLRNOI, uintroMEFq6, {from: accounts[1]});
		const boolr6xxpIm = await CryptoSecureBankTokenma83MU.approve.call(addressWhgbApn, uint3IgqOG, {from: accounts[2]});
//		const addressznsjmkR = await CryptoSecureBankTokenma83MU.removeBlackList.call(addressA5n6zbB, {from: accounts[4]});
//		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addresss6GlbQu, addressjXSaI93, {from: accounts[0]});

		assert.equal(boolbJrgB4, true)
		assert.equal(boolr6xxpIm, true)
		await expect(CryptoSecureBankTokenma83MU.removeBlackList.call(addressA5n6zbB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressZ1HUYf1 = accounts[1]
		const uintZhHXAxo = BigInt("62")
		const addressRwCGUTo = accounts[4]
		const addressbK1ZMU6 = accounts[2]
//		const addressU4USA2 = await CryptoSecureBankTokenma83MU.destroyBlackFunds.call(addressZ1HUYf1, {from: accounts[1]});
//		const boolvyexGh = await CryptoSecureBankTokenma83MU.transfer.call(addressRwCGUTo, uintZhHXAxo, {from: accounts[0]});
//		const uintoLXiML7 = await CryptoSecureBankTokenma83MU.balanceOf.call(addressbK1ZMU6, {from: accounts[2]});

		await expect(CryptoSecureBankTokenma83MU.destroyBlackFunds.call(addressZ1HUYf1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintgcBoXz = BigInt("1804")
		const addressfNuefBK = accounts[4]
		const uintifQjaUQ = BigInt("1405")
		const boolaK0FdsV = await CryptoSecureBankTokenma83MU.approve.call(addressfNuefBK, uintgcBoXz, {from: "0x0000000000000000000000000000000000000001"});
		const boolK6B2mPC = await CryptoSecureBankTokenma83MU.redeem.call(uintifQjaUQ, {from: accounts[1]});

		assert.equal(boolK6B2mPC, true)
		assert.equal(boolaK0FdsV, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresstrLDmLL = accounts[3]
		const addressuhkFQRQ = accounts[6]
		const addressISPbyUO = accounts[2]
		const uintFuhnPKs = await CryptoSecureBankTokenma83MU.allowance.call(addressuhkFQRQ, addresstrLDmLL, {from: accounts[0]});
		const addresssPFsBVv = await CryptoSecureBankTokenma83MU.transferOwnership.call(addressISPbyUO, {from: accounts[1]});

		assert.equal(uintFuhnPKs, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenma83MU = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintul0Fyvk = BigInt("0")
		const addressWGOxEHH = accounts[1]
		const uinteSY4JJ = BigInt("803")
		const addressXHHx0QW = accounts[3]
		const uintN0fJVeM = BigInt("1119")
		const addressXOAlEhi = accounts[2]
		const boolD4iL5PS = await CryptoSecureBankTokenma83MU.transfer.call(addressWGOxEHH, uintul0Fyvk, {from: accounts[3]});
		const boolGjt8gF4 = await CryptoSecureBankTokenma83MU.transfer.call(addressXHHx0QW, uinteSY4JJ, {from: accounts[1]});
		const booleEUR09L = await CryptoSecureBankTokenma83MU.approve.call(addressXOAlEhi, uintN0fJVeM, {from: accounts[1]});

		assert.equal(boolD4iL5PS, true)
		assert.equal(boolGjt8gF4, true)
		assert.equal(booleEUR09L, true)
	});
})