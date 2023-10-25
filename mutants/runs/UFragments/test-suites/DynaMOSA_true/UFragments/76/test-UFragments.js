const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsTIEupQC = await UFragments.new({from: accounts[2]});
		const addresssCWPDkz = accounts[4]
		const uintlqt5beE = BigInt("682")
		const addresshObmfBl = accounts[4]
		const addressXtaQcRW = accounts[2]
		const intZb87JX6 = BigInt("636")
		const intUhV18BV = BigInt("4")
		const addressuKCiOG5 = await UFragmentsTIEupQC.transferOwnership.call(addresssCWPDkz, {from: accounts[3]});
		const addressoAJpahD = await UFragmentsTIEupQC.initRebase.call(addresshObmfBl, uintlqt5beE, {from: accounts[3]});
		const addressVrvxzzS = await UFragmentsTIEupQC.initialize.call(addressXtaQcRW, {from: accounts[1]});
		const int256cJggvWr = await UFragmentsTIEupQC.mul.call(intUhV18BV, intZb87JX6, {from: accounts[3]});
		const uint256A9ecTxl = await UFragmentsTIEupQC.totalSupply.call({from: accounts[2]});

		await expect(UFragmentsTIEupQC.transferOwnership.call(addresssCWPDkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmPRnbBP = await UFragments.new({from: accounts[1]});
		const intV7cF4yn = BigInt("575")
		const intZobd9VR = BigInt("793")
		const uintakmGkM = BigInt("1765")
		const addressPn0esjH = accounts[1]
		const uint8JM0gx2n = await UFragmentsmPRnbBP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zrQP9zh = await UFragmentsmPRnbBP.calRebase.call({from: accounts[0]});
		const int256xE9hPmw = await UFragmentsmPRnbBP.mul.call(intZobd9VR, intV7cF4yn, {from: accounts[5]});
		const booldnK35LM = await UFragmentsmPRnbBP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booloICxyG4 = await UFragmentsmPRnbBP.transfer.call(addressPn0esjH, uintakmGkM, {from: accounts[0]});

		assert.equal(uint8JM0gx2n, BigInt("0"))
		await expect(UFragmentsmPRnbBP.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrgGtDgl = await UFragments.new({from: accounts[2]});
		const intkul31ec = BigInt("-1862")
		const intUX6hbJ = BigInt("178")
		const intAV3gyBj = BigInt("-83")
		const stringA20eo0Q = await UFragmentsrgGtDgl.symbol.call({from: accounts[1]});
		const boolhbm3Hq = await UFragmentsrgGtDgl.rebaseTimeInfo.call({from: accounts[1]});
		const boolwPumhnP = await UFragmentsrgGtDgl.rebaseTimeInfo.call({from: accounts[4]});
		const int256R9Iz0f3 = await UFragmentsrgGtDgl.sub.call(intUX6hbJ, intkul31ec, {from: accounts[3]});
		const int256AQegfyk = await UFragmentsrgGtDgl.abs.call(intAV3gyBj, {from: accounts[3]});

		assert.equal(stringA20eo0Q, "")
		await expect(UFragmentsrgGtDgl.sub.call(intUX6hbJ, intkul31ec, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnimRkdS = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintq9QllIu = BigInt("148")
		const stringHRJuvUb = "Ini7MJ1Y3UFhDQm5RtcFMJge9E79kPi4XGNPaXdqLovtR"
		const string5QKD9e = "KK4ToTfN4PyNmLfOM"
		const int0QLRly = BigInt("1801")
		const intp91Yozd = BigInt("251")
		const intzaex39W = BigInt("-1427")
		const intqatbjiz = BigInt("377")
		const stringBOesglT = await UFragmentsnimRkdS.initialize.call(string5QKD9e, stringHRJuvUb, uintq9QllIu, {from: accounts[0]});
		const int256IXe7SQX = await UFragmentsnimRkdS.mul.call(intp91Yozd, int0QLRly, {from: accounts[1]});
		const int256eCO57Z2 = await UFragmentsnimRkdS.mul.call(intqatbjiz, intzaex39W, {from: accounts[5]});
		await UFragmentsnimRkdS.renounceOwnership.call({from: accounts[1]});
		const stringuzIwmLW = await UFragmentsnimRkdS.name.call({from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentsrgGtDgl = await UFragments.new({from: accounts[2]});
		const intqUKDbQs = BigInt("-1862")
		const intwwdgd9 = BigInt("178")
		const uintVc50Eb9 = BigInt("1800")
		const addressYPZYsd4 = accounts[2]
		const addressFmGDNjT = accounts[4]
		const intTvihSGn = BigInt("-146")
		const stringA20eo0Q = await UFragmentsrgGtDgl.symbol.call({from: accounts[1]});
		const uint256Dh7UFyM = await UFragmentsrgGtDgl.totalSupply.call({from: accounts[4]});
		const boolhbm3Hq = await UFragmentsrgGtDgl.rebaseTimeInfo.call({from: accounts[1]});
		const int256R9Iz0f3 = await UFragmentsrgGtDgl.sub.call(intwwdgd9, intqUKDbQs, {from: accounts[3]});
		const boolWEkIqnI = await UFragmentsrgGtDgl.transferFrom.call(addressFmGDNjT, addressYPZYsd4, uintVc50Eb9, {from: accounts[5]});
		const int256AQegfyk = await UFragmentsrgGtDgl.abs.call(intTvihSGn, {from: accounts[3]});

		assert.equal(stringA20eo0Q, "")
		assert.equal(uint256Dh7UFyM, BigInt("0"))
		await expect(UFragmentsrgGtDgl.sub.call(intwwdgd9, intqUKDbQs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskYYD1jz = await UFragments.new({from: accounts[1]});
		const uintwcsxauk = BigInt("1529")
		const addressya9lQO = accounts[5]
		const int6C3I1U = BigInt("274")
		const boolwyHoDsJ = await UFragmentskYYD1jz.approve.call(addressya9lQO, uintwcsxauk, {from: accounts[5]});
		const uint256hKxhQly = await UFragmentskYYD1jz.calRebase.call({from: accounts[2]});
		const int256ADMlaWS = await UFragmentskYYD1jz.abs.call(int6C3I1U, {from: accounts[1]});
		await UFragmentskYYD1jz.renounceOwnership.call({from: accounts[4]});
		const boolAe6LA3j = await UFragmentskYYD1jz.rebaseTimeInfo.call({from: accounts[2]});

		assert.equal(boolwyHoDsJ, true)
		await expect(UFragmentskYYD1jz.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmPRnbBP = await UFragments.new({from: accounts[1]});
		const addressiDLgJNj = accounts[0]
		const intEjvXt12 = BigInt("575")
		const intHWrKtOf = BigInt("793")
		const uintVllqUgG = BigInt("1748")
		const addressspq6a0r = accounts[1]
		const uint256qMgEKr = await UFragmentsmPRnbBP.balanceOf.call(addressiDLgJNj, {from: accounts[4]});
		const uint8JM0gx2n = await UFragmentsmPRnbBP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsmPRnbBP.initializer.call({from: accounts[5]});
		const uint256zrQP9zh = await UFragmentsmPRnbBP.calRebase.call({from: accounts[0]});
		const int256xE9hPmw = await UFragmentsmPRnbBP.mul.call(intHWrKtOf, intEjvXt12, {from: accounts[5]});
		const booldnK35LM = await UFragmentsmPRnbBP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booloICxyG4 = await UFragmentsmPRnbBP.transfer.call(addressspq6a0r, uintVllqUgG, {from: accounts[0]});

		assert.equal(uint256qMgEKr, BigInt("0"))
		assert.equal(uint8JM0gx2n, BigInt("0"))
		await expect(UFragmentsmPRnbBP.initializer.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmPRnbBP = await UFragments.new({from: accounts[1]});
		const addresstpaa1R = accounts[4]
		const addressgWuJXVu = accounts[4]
		const addressZUDwKvw = accounts[0]
		const intmq6eioP = BigInt("575")
		const intoCmLLbP = BigInt("793")
		const uintB19otc5 = BigInt("1748")
		const addressGVp8DXv = accounts[1]
		const uint256jfujgmu = await UFragmentsmPRnbBP.allowance.call(addressgWuJXVu, addresstpaa1R, {from: accounts[3]});
		const uint256qMgEKr = await UFragmentsmPRnbBP.balanceOf.call(addressZUDwKvw, {from: accounts[4]});
		const uint8JM0gx2n = await UFragmentsmPRnbBP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsmPRnbBP.initializer.call({from: accounts[5]});
		const int256xE9hPmw = await UFragmentsmPRnbBP.mul.call(intoCmLLbP, intmq6eioP, {from: accounts[5]});
		const booldnK35LM = await UFragmentsmPRnbBP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booloICxyG4 = await UFragmentsmPRnbBP.transfer.call(addressGVp8DXv, uintB19otc5, {from: accounts[0]});

		assert.equal(uint256jfujgmu, BigInt("0"))
		assert.equal(uint256qMgEKr, BigInt("0"))
		assert.equal(uint8JM0gx2n, BigInt("0"))
		await expect(UFragmentsmPRnbBP.initializer.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskYYD1jz = await UFragments.new({from: accounts[1]});
		const stringyFxBCX7 = await UFragmentskYYD1jz.name.call({from: accounts[2]});
		const uint256hKxhQly = await UFragmentskYYD1jz.calRebase.call({from: accounts[2]});

		assert.equal(stringyFxBCX7, "")
		await expect(UFragmentskYYD1jz.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskYYD1jz = await UFragments.new({from: accounts[1]});
		const addressG9Tl8IB = accounts[4]
		const intM8VtHhy = BigInt("282")
		const addressMHlndUf = await UFragmentskYYD1jz.initialize.call(addressG9Tl8IB, {from: accounts[1]});
		const uint256hKxhQly = await UFragmentskYYD1jz.calRebase.call({from: accounts[2]});
		const int256ADMlaWS = await UFragmentskYYD1jz.abs.call(intM8VtHhy, {from: accounts[1]});

		await expect(UFragmentskYYD1jz.initialize.call(addressG9Tl8IB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmPRnbBP = await UFragments.new({from: accounts[1]});
		const addressejzNBPf = accounts[0]
		const addressThEon2z = accounts[4]
		const intO9P0y9j = BigInt("575")
		const intYZ2M1m = BigInt("793")
		const uintT4Ko3Su = BigInt("1748")
		const addressvef8AG = accounts[2]
		const address0KyExC = await UFragmentsmPRnbBP.owner.call({from: accounts[4]});
		const uint256qMgEKr = await UFragmentsmPRnbBP.balanceOf.call(addressejzNBPf, {from: accounts[4]});
		const uint8JM0gx2n = await UFragmentsmPRnbBP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsmPRnbBP.initializer.call({from: accounts[5]});
		const addressUIkZ8J = await UFragmentsmPRnbBP.initialize.call(addressThEon2z, {from: accounts[1]});
		const uint256zrQP9zh = await UFragmentsmPRnbBP.calRebase.call({from: accounts[0]});
		const int256xE9hPmw = await UFragmentsmPRnbBP.mul.call(intYZ2M1m, intO9P0y9j, {from: accounts[5]});
		const booloICxyG4 = await UFragmentsmPRnbBP.transfer.call(addressvef8AG, uintT4Ko3Su, {from: accounts[0]});

		assert.equal(address0KyExC, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256qMgEKr, BigInt("0"))
		assert.equal(uint8JM0gx2n, BigInt("0"))
		await expect(UFragmentsmPRnbBP.initializer.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmPRnbBP = await UFragments.new({from: accounts[1]});
		const addresssZJau75 = accounts[0]
		const uintlhMCLTt = BigInt("1477")
		const addressPOPuTiI = accounts[1]
		const address52UEiy = accounts[2]
		const intktXbGmR = BigInt("575")
		const intZkJUZaD = BigInt("793")
		const addressJJieHmv = accounts[4]
		const uintqH0lA2h = BigInt("216")
		const stringdx2aJQf = "oc254shloJTBR8A254yQKgbzXsnrMvwqq7m5eERzuhh9G9cdhgqEymTqoy8ohoBKJYt19WX5Nlo4kvgBMBA0nkKMipXLIa36"
		const stringWdEPN7C = "uflfX"
		const uintELa2nM1 = BigInt("1748")
		const addressYyvyxmQ = accounts[1]
		const uint256qMgEKr = await UFragmentsmPRnbBP.balanceOf.call(addresssZJau75, {from: accounts[4]});
		const booloGHTkq3 = await UFragmentsmPRnbBP.transferFrom.call(address52UEiy, addressPOPuTiI, uintlhMCLTt, {from: accounts[3]});
		const uint8JM0gx2n = await UFragmentsmPRnbBP.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Q4M25xO = await UFragmentsmPRnbBP.calRebase.call({from: accounts[4]});
		await UFragmentsmPRnbBP.initializer.call({from: accounts[5]});
		const stringhmdxxBZ = await UFragmentsmPRnbBP.symbol.call({from: accounts[5]});
		const uint256zrQP9zh = await UFragmentsmPRnbBP.calRebase.call({from: accounts[0]});
		const int256xE9hPmw = await UFragmentsmPRnbBP.mul.call(intZkJUZaD, intktXbGmR, {from: accounts[5]});
		const uint256oQlttmm = await UFragmentsmPRnbBP.balanceOf.call(addressJJieHmv, {from: accounts[5]});
		const stringXWwop23 = await UFragmentsmPRnbBP.initialize.call(stringWdEPN7C, stringdx2aJQf, uintqH0lA2h, {from: accounts[4]});
		const booldnK35LM = await UFragmentsmPRnbBP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booloICxyG4 = await UFragmentsmPRnbBP.transfer.call(addressYyvyxmQ, uintELa2nM1, {from: accounts[0]});

		assert.equal(uint256qMgEKr, BigInt("0"))
		await expect(UFragmentsmPRnbBP.transferFrom.call(address52UEiy, addressPOPuTiI, uintlhMCLTt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLLbC4mf = await UFragments.new({from: accounts[2]});
		const uinte76yeaL = BigInt("1803")
		const addressstDpUxw = "0x0000000000000000000000000000000000000001"
		const uinty3d88DS = BigInt("135")
		const stringLkTyS7t = "mWzEDOyoVLfV"
		const stringmlkPwHi = "ShBXpZmUlQUjTWKwafQ8rppWv3ogm5z"
		const uinttKq1V4 = BigInt("1299")
		const addresshiNXSk2 = accounts[4]
		const boolVaXilch = await UFragmentsLLbC4mf.approve.call(addressstDpUxw, uinte76yeaL, {from: accounts[3]});
		const stringcoNSD2S = await UFragmentsLLbC4mf.initialize.call(stringmlkPwHi, stringLkTyS7t, uinty3d88DS, {from: accounts[0]});
		const boolUCBodoP = await UFragmentsLLbC4mf.transfer.call(addresshiNXSk2, uinttKq1V4, {from: accounts[0]});

		assert.equal(boolVaXilch, true)
		await expect(UFragmentsLLbC4mf.transfer.call(addresshiNXSk2, uinttKq1V4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})