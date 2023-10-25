const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsqGFP6Po = await UFragments.new({from: accounts[4]});
		const addressfGpVu8G = accounts[3]
		const intji6RBL = BigInt("1669")
		const intoF8syDj = BigInt("-325")
		const uint256PX2qcdA = await UFragmentsqGFP6Po.balanceOf.call(addressfGpVu8G, {from: accounts[3]});
		const addressf5mIkRQ = await UFragmentsqGFP6Po.owner.call({from: accounts[3]});
//		await UFragmentsqGFP6Po.renounceOwnership.call({from: accounts[4]});
//		const int256Pn5lkJx = await UFragmentsqGFP6Po.div.call(intoF8syDj, intji6RBL, {from: accounts[0]});
//		const boolppf5vie = await UFragmentsqGFP6Po.rebaseTimeInfo.call({from: accounts[4]});

		assert.equal(addressf5mIkRQ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256PX2qcdA, BigInt("0"))
		await expect(UFragmentsqGFP6Po.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEuLUyj = await UFragments.new({from: accounts[1]});
		const uinteldyag = BigInt("1375")
		const addressHvCPqJK = accounts[2]
		const uinttH4Vcrs = BigInt("1818")
		const addresswwN4jwy = accounts[2]
		const addressFcM7qSI = accounts[5]
		const addresscWD3aaH = accounts[0]
		const boollpPrWA2 = await UFragmentsEuLUyj.approve.call(addressHvCPqJK, uinteldyag, {from: accounts[1]});
//		const boolwiUnuo7 = await UFragmentsEuLUyj.transfer.call(addresswwN4jwy, uinttH4Vcrs, {from: accounts[5]});
//		const uint256w3aQR1R = await UFragmentsEuLUyj.balanceOf.call(addressFcM7qSI, {from: accounts[2]});
//		const addressiKabxzJ = await UFragmentsEuLUyj.initialize.call(addresscWD3aaH, {from: accounts[5]});

		assert.equal(boollpPrWA2, true)
		await expect(UFragmentsEuLUyj.transfer.call(addresswwN4jwy, uinttH4Vcrs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLFh6BOB = await UFragments.new({from: accounts[3]});
		const addressU0bUpbz = "0x0000000000000000000000000000000000000001"
		const addressIvfKXG5 = accounts[4]
		const addressLPtiqPn = "0x0000000000000000000000000000000000000001"
		const addressxyoLuLC = accounts[1]
		const intdOrS1Cm = BigInt("1044")
		const intnGtoORm = BigInt("1259")
		const addressHzwmKvm = await UFragmentsLFh6BOB.owner.call({from: accounts[0]});
		const uint256JMFttOK = await UFragmentsLFh6BOB.allowance.call(addressIvfKXG5, addressU0bUpbz, {from: accounts[2]});
		const uint256U9owkmx = await UFragmentsLFh6BOB.allowance.call(addressxyoLuLC, addressLPtiqPn, {from: accounts[1]});
//		const int256srUmQKQ = await UFragmentsLFh6BOB.div.call(intnGtoORm, intdOrS1Cm, {from: accounts[4]});

		assert.equal(addressHzwmKvm, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256JMFttOK, BigInt("0"))
		assert.equal(uint256U9owkmx, BigInt("0"))
		await expect(UFragmentsLFh6BOB.div.call(intnGtoORm, intdOrS1Cm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsSHcTTvJ = await UFragments.new({from: accounts[4]});
		const intsZmzI2d = BigInt("1608")
		const intIm2656h = BigInt("1949")
		const uintMzxErkn = BigInt("28")
		const addressKULg7JT = accounts[2]
		const stringPLevthB = await UFragmentsSHcTTvJ.name.call({from: accounts[2]});
		const stringCr24PKA = await UFragmentsSHcTTvJ.symbol.call({from: accounts[2]});
//		const int256DfC5QqX = await UFragmentsSHcTTvJ.div.call(intIm2656h, intsZmzI2d, {from: accounts[5]});
//		const boolP54sCSy = await UFragmentsSHcTTvJ.transfer.call(addressKULg7JT, uintMzxErkn, {from: accounts[3]});

		assert.equal(stringCr24PKA, "")
		assert.equal(stringPLevthB, "")
		await expect(UFragmentsSHcTTvJ.div.call(intIm2656h, intsZmzI2d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswVmaeC = await UFragments.new({from: accounts[1]});
		const addressCh47EUI = "0x0000000000000000000000000000000000000001"
//		const addressxgR4igT = await UFragmentswVmaeC.initialize.call(addressCh47EUI, {from: accounts[3]});
//		const uint8pC1FyQ4 = await UFragmentswVmaeC.decimals.call({from: accounts[3]});

		await expect(UFragmentswVmaeC.initialize.call(addressCh47EUI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNEhyDgw = await UFragments.new({from: accounts[2]});
		const uint8UVEGAgE = await UFragmentsNEhyDgw.decimals.call({from: accounts[4]});
//		await UFragmentsNEhyDgw.renounceOwnership.call({from: accounts[1]});
//		const boolM7wGvp1 = await UFragmentsNEhyDgw.isOwner.call({from: accounts[3]});

		assert.equal(uint8UVEGAgE, BigInt("0"))
		await expect(UFragmentsNEhyDgw.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDdvt31L = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnzHFRm9 = BigInt("1937")
		const addressSSJ1hPD = accounts[2]
		const addresszt9DQn2 = accounts[1]
		const uinta61QNF4 = BigInt("1990")
		const addressIUV4O81 = "0x0000000000000000000000000000000000000001"
		const addressRX5gogn = accounts[0]
		const addressGxV6kmW = await UFragmentsDdvt31L.initRebase.call(addressSSJ1hPD, uintnzHFRm9, {from: accounts[0]});
		const addressaDPcHeY = await UFragmentsDdvt31L.initialize.call(addresszt9DQn2, {from: accounts[2]});
		const addressNy03Q5X = await UFragmentsDdvt31L.owner.call({from: accounts[4]});
		const boolCuYD06 = await UFragmentsDdvt31L.transfer.call(addressIUV4O81, uinta61QNF4, {from: accounts[3]});
		const addressutJ8j5P = await UFragmentsDdvt31L.initialize.call(addressRX5gogn, {from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsqGFP6Po = await UFragments.new({from: accounts[4]});
		const addressBEhmBo = accounts[3]
		const uint256PX2qcdA = await UFragmentsqGFP6Po.balanceOf.call(addressBEhmBo, {from: accounts[3]});
		const addressf5mIkRQ = await UFragmentsqGFP6Po.owner.call({from: accounts[3]});
		const boolppf5vie = await UFragmentsqGFP6Po.rebaseTimeInfo.call({from: accounts[4]});

		assert.equal(addressf5mIkRQ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256PX2qcdA, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsHCb3TN0 = await UFragments.new({from: accounts[2]});
		const addressq0kqA8S = "0x0000000000000000000000000000000000000001"
		const booldOvdir = await UFragmentsHCb3TN0.isOwner.call({from: accounts[2]});
		const uint256DKMb0Xv = await UFragmentsHCb3TN0.totalSupply.call({from: accounts[4]});
		const uint256o16tnL1 = await UFragmentsHCb3TN0.totalSupply.call({from: accounts[1]});
//		const addressnMX0xma = await UFragmentsHCb3TN0.transferOwnership.call(addressq0kqA8S, {from: accounts[1]});

		assert.equal(booldOvdir, false)
		assert.equal(uint256DKMb0Xv, BigInt("0"))
		assert.equal(uint256o16tnL1, BigInt("0"))
		await expect(UFragmentsHCb3TN0.transferOwnership.call(addressq0kqA8S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv9WG4me = await UFragments.new({from: accounts[4]});
		const uintkNc3RcD = BigInt("790")
		const addressOxK87pP = accounts[4]
		const addressJU9bVGa = accounts[1]
		const intfpR1RTQ = BigInt("1898")
		const intHJTFcCh = BigInt("241")
		const addressxZyw2Sx = accounts[4]
		const intXjTyyyi = BigInt("-337")
		const intt6G3TZ8 = BigInt("1756")
		const uint256P4u3mZ3 = await UFragmentsv9WG4me.totalSupply.call({from: accounts[2]});
//		const boolAH0PsFS = await UFragmentsv9WG4me.transferFrom.call(addressJU9bVGa, addressOxK87pP, uintkNc3RcD, {from: accounts[5]});
//		const int256GqQsHWy = await UFragmentsv9WG4me.div.call(intHJTFcCh, intfpR1RTQ, {from: accounts[3]});
//		const addressRwhWC7a = await UFragmentsv9WG4me.owner.call({from: accounts[5]});
//		const addresssEXb1r = await UFragmentsv9WG4me.transferOwnership.call(addressxZyw2Sx, {from: accounts[3]});
//		const int256VVzjli = await UFragmentsv9WG4me.div.call(intt6G3TZ8, intXjTyyyi, {from: accounts[2]});

		assert.equal(uint256P4u3mZ3, BigInt("0"))
		await expect(UFragmentsv9WG4me.transferFrom.call(addressJU9bVGa, addressOxK87pP, uintkNc3RcD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEuLUyj = await UFragments.new({from: accounts[1]});
		const uintzDBgLc7 = BigInt("12")
		const stringoZUzbj1 = "Ebhnq9shXcS2kwxauWwzitHjSTDTHvuTrhAsf1vldgjPwGnUUpipXbtXnEa47z7FEJmpweAl"
		const stringjlbg0oo = "FAx6ddbLmWv"
		const uintLipN1of = BigInt("1818")
		const addressuO8usW = accounts[4]
		const stringwccG7BK = await UFragmentsEuLUyj.initialize.call(stringjlbg0oo, stringoZUzbj1, uintzDBgLc7, {from: accounts[1]});
//		const boolwiUnuo7 = await UFragmentsEuLUyj.transfer.call(addressuO8usW, uintLipN1of, {from: accounts[5]});

		await expect(UFragmentsEuLUyj.transfer.call(addressuO8usW, uintLipN1of, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsSDT9DOp = await UFragments.new({from: accounts[2]});
		const addressURNYCBl = accounts[3]
		const addresspasZsbG = accounts[1]
		const inttHDJFX = BigInt("-1856")
		const addressuNXsMy = accounts[3]
		const uint256rJnGYnA = await UFragmentsSDT9DOp.allowance.call(addresspasZsbG, addressURNYCBl, {from: accounts[1]});
//		const uint256cvuZFMw = await UFragmentsSDT9DOp.calRebase.call({from: accounts[5]});
//		const int256jAkIW44 = await UFragmentsSDT9DOp.abs.call(inttHDJFX, {from: accounts[0]});
//		const uint256EBdZ2hC = await UFragmentsSDT9DOp.balanceOf.call(addressuNXsMy, {from: accounts[0]});

		assert.equal(uint256rJnGYnA, BigInt("0"))
		await expect(UFragmentsSDT9DOp.calRebase.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})