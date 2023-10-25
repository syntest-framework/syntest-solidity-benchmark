const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsZzEqj7P = await UFragments.new({from: accounts[1]});
		const uintXshK6ek = BigInt("713")
		const addressf9NNJ7 = accounts[2]
		const int4EKRgL = BigInt("223")
		const intziEYcG = BigInt("14")
		const uintEnqogWR = BigInt("1243")
		const addressYMk1R9p = accounts[5]
//		const addressZv2wpL = await UFragmentsZzEqj7P.initRebase.call(addressf9NNJ7, uintXshK6ek, {from: accounts[3]});
//		const boolV8rXOo9 = await UFragmentsZzEqj7P.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256i1aYWYy = await UFragmentsZzEqj7P.add.call(intziEYcG, int4EKRgL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDVKhR9X = await UFragmentsZzEqj7P.approve.call(addressYMk1R9p, uintEnqogWR, {from: accounts[5]});

		await expect(UFragmentsZzEqj7P.initRebase.call(addressf9NNJ7, uintXshK6ek, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdEaixbu = await UFragments.new({from: accounts[4]});
		const uintFtEMRY4 = BigInt("561")
		const addressRcPaLyi = accounts[4]
		const uintOE3dgHv = BigInt("240")
		const addressDk21R3x = accounts[3]
		const addressQdMVv9S = accounts[0]
//		const boolg3z8lrJ = await UFragmentsdEaixbu.transfer.call(addressRcPaLyi, uintFtEMRY4, {from: accounts[2]});
//		const address0lJdDU = await UFragmentsdEaixbu.initRebase.call(addressDk21R3x, uintOE3dgHv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTrNGZp = await UFragmentsdEaixbu.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressl0EkLiO = await UFragmentsdEaixbu.transferOwnership.call(addressQdMVv9S, {from: accounts[0]});

		await expect(UFragmentsdEaixbu.transfer.call(addressRcPaLyi, uintFtEMRY4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragments6wcbg8 = await UFragments.new({from: accounts[0]});
		const addressV8OORd = accounts[1]
		const addresspd4Q4W5 = accounts[2]
		const intOF1epAU = BigInt("-160")
		const int2FFIyA = BigInt("1097")
		const uint256axMEGe6 = await UFragments6wcbg8.allowance.call(addresspd4Q4W5, addressV8OORd, {from: accounts[0]});
//		const int256mI8TYSQ = await UFragments6wcbg8.sub.call(int2FFIyA, intOF1epAU, {from: accounts[3]});
//		await UFragments6wcbg8.initializer.call({from: accounts[1]});

		assert.equal(uint256axMEGe6, BigInt("0"))
		await expect(UFragments6wcbg8.sub.call(int2FFIyA, intOF1epAU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKS2cPjE = await UFragments.new({from: accounts[3]});
		const uintjxOVhV = BigInt("237")
		const addressZeamSMi = accounts[1]
		const addressSsl4Uq1 = await UFragmentsKS2cPjE.owner.call({from: accounts[2]});
		const addresseuJhQNZ = await UFragmentsKS2cPjE.owner.call({from: accounts[0]});
//		await UFragmentsKS2cPjE.renounceOwnership.call({from: accounts[2]});
//		const boolpHkVbDV = await UFragmentsKS2cPjE.approve.call(addressZeamSMi, uintjxOVhV, {from: accounts[4]});

		assert.equal(addressSsl4Uq1, 0x0000000000000000000000000000000000000000)
		assert.equal(addresseuJhQNZ, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsKS2cPjE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentslMIt79R = await UFragments.new({from: accounts[0]});
		const uintSZncQ3F = BigInt("487")
		const addressfm0WcB0 = "0x0000000000000000000000000000000000000001"
		const addressaGvyeC6 = accounts[5]
		const uint7Dxv21 = BigInt("1053")
		const addressdzEUber = accounts[1]
		const uintAkRo16g = BigInt("335")
		const addressym0EJN3 = accounts[3]
		const boolpa12vpz = await UFragmentslMIt79R.approve.call(addressfm0WcB0, uintSZncQ3F, {from: accounts[1]});
//		const addressTxxhf6n = await UFragmentslMIt79R.transferOwnership.call(addressaGvyeC6, {from: accounts[2]});
//		const boolFw08Qzs = await UFragmentslMIt79R.transfer.call(addressdzEUber, uint7Dxv21, {from: accounts[5]});
//		const addressLVFQq9A = await UFragmentslMIt79R.initRebase.call(addressym0EJN3, uintAkRo16g, {from: accounts[2]});
//		await UFragmentslMIt79R.initializer.call({from: accounts[2]});

		assert.equal(boolpa12vpz, true)
		await expect(UFragmentslMIt79R.transferOwnership.call(addressaGvyeC6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWnULBNY = await UFragments.new({from: accounts[1]});
		const addressbVPAogS = accounts[3]
		const intMrgZVja = BigInt("-1696")
		const intnWOPnkM = BigInt("254")
		const uint256xhbrEt0 = await UFragmentsWnULBNY.balanceOf.call(addressbVPAogS, {from: accounts[2]});
		const uint8MSWTnML = await UFragmentsWnULBNY.decimals.call({from: accounts[1]});
		const boolM6mKDPz = await UFragmentsWnULBNY.rebaseTimeInfo.call({from: accounts[0]});
//		const int256eexT0Gi = await UFragmentsWnULBNY.sub.call(intnWOPnkM, intMrgZVja, {from: accounts[2]});

		assert.equal(uint256xhbrEt0, BigInt("0"))
		assert.equal(uint8MSWTnML, BigInt("0"))
		await expect(UFragmentsWnULBNY.sub.call(intnWOPnkM, intMrgZVja, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKzGv5w = await UFragments.new({from: accounts[3]});
		const stringrRbVIZR = await UFragmentsKzGv5w.name.call({from: accounts[2]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]});

		assert.equal(stringrRbVIZR, "")
		await expect(UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKzGv5w = await UFragments.new({from: accounts[3]});
		const intN8aLyUC = BigInt("204")
		const intGBSKXGe = BigInt("1643")
		const stringrRbVIZR = await UFragmentsKzGv5w.name.call({from: accounts[2]});
		const stringqrySnbi = await UFragmentsKzGv5w.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringTxe3dQ9 = await UFragmentsKzGv5w.symbol.call({from: accounts[4]});
//		const int25636WEHR = await UFragmentsKzGv5w.add.call(intGBSKXGe, intN8aLyUC, {from: accounts[2]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]});

		assert.equal(stringTxe3dQ9, "")
		assert.equal(stringqrySnbi, "")
		assert.equal(stringrRbVIZR, "")
		await expect(UFragmentsKzGv5w.add.call(intGBSKXGe, intN8aLyUC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKzGv5w = await UFragments.new({from: accounts[3]});
		const uints0HQYsq = BigInt("1827")
		const addressqcfDi11 = accounts[3]
		const stringrRbVIZR = await UFragmentsKzGv5w.name.call({from: accounts[2]});
//		const uint256DeGRiBl = await UFragmentsKzGv5w.calRebase.call({from: accounts[3]});
//		const boolDOqw0EM = await UFragmentsKzGv5w.transfer.call(addressqcfDi11, uints0HQYsq, {from: accounts[2]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]});

		assert.equal(stringrRbVIZR, "")
		await expect(UFragmentsKzGv5w.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKzGv5w = await UFragments.new({from: accounts[3]});
		const uintRu0GNY = BigInt("212")
		const stringOoZkR5g = "TuEWKW7pimyTHHDklWdG2YUXVMR3BLsQ1jnQE8WPw8mj8M355VRz4OdVMnOoiiML5NAcTaE"
		const stringNPGKGhn = "8bAQh9G"
		const uintFORDTca = BigInt("541")
		const addresszRJtrLT = "0x0000000000000000000000000000000000000001"
		const stringrRbVIZR = await UFragmentsKzGv5w.name.call({from: accounts[2]});
		const stringTpBUdK = await UFragmentsKzGv5w.initialize.call(stringNPGKGhn, stringOoZkR5g, uintRu0GNY, {from: accounts[2]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]});
//		const addressw0NCjc3 = await UFragmentsKzGv5w.initRebase.call(addresszRJtrLT, uintFORDTca, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[4]});

		assert.equal(stringrRbVIZR, "")
		await expect(UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKzGv5w = await UFragments.new({from: accounts[3]});
		const addressI5xdFFj = accounts[5]
//		const addressYmCeNMm = await UFragmentsKzGv5w.initialize.call(addressI5xdFFj, {from: accounts[0]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[2]});
//		await UFragmentsKzGv5w.onlyOwner.call({from: accounts[5]});

		await expect(UFragmentsKzGv5w.initialize.call(addressI5xdFFj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdEaixbu = await UFragments.new({from: accounts[4]});
		const uintKCay2Mt = BigInt("1902")
		const addressC2OGbsW = accounts[3]
		const addressevI0jem = accounts[4]
		const uintCVK1CGf = BigInt("561")
		const addresscY16P0k = accounts[4]
		const addresssBq9QwT = accounts[1]
//		const boolvHsSKi5 = await UFragmentsdEaixbu.transferFrom.call(addressevI0jem, addressC2OGbsW, uintKCay2Mt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolg3z8lrJ = await UFragmentsdEaixbu.transfer.call(addresscY16P0k, uintCVK1CGf, {from: accounts[2]});
//		const addressTrNGZp = await UFragmentsdEaixbu.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressl0EkLiO = await UFragmentsdEaixbu.transferOwnership.call(addresssBq9QwT, {from: accounts[0]});

		await expect(UFragmentsdEaixbu.transferFrom.call(addressevI0jem, addressC2OGbsW, uintKCay2Mt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsfVOA8d7 = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intEWEeGW8 = BigInt("1814")
		const intLzJ3Yz = BigInt("93")
		const addresslegcsBf = accounts[0]
		const uinteSkbiDO = BigInt("1412")
		const addressaUbePZJ = accounts[3]
		const addressgx9abWA = accounts[1]
		const addressN5nOIL9 = accounts[0]
		const int256TZECyCJ = await UFragmentsfVOA8d7.sub.call(intLzJ3Yz, intEWEeGW8, {from: accounts[0]});
		const addressr12mVVz = await UFragmentsfVOA8d7.initialize.call(addresslegcsBf, {from: accounts[3]});
		const boolo556fY = await UFragmentsfVOA8d7.transferFrom.call(addressgx9abWA, addressaUbePZJ, uinteSkbiDO, {from: accounts[5]});
		await UFragmentsfVOA8d7.onlyOwner.call({from: accounts[2]});
		const addresspJMXY2y = await UFragmentsfVOA8d7.initialize.call(addressN5nOIL9, {from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentsGwx9YH9 = await UFragments.new({from: accounts[1]});
		const uint256NtOJ2W1 = await UFragmentsGwx9YH9.totalSupply.call({from: accounts[3]});
//		const uint256booL5Jk = await UFragmentsGwx9YH9.calRebase.call({from: accounts[2]});
//		const stringBNfcCHP = await UFragmentsGwx9YH9.name.call({from: accounts[2]});

		assert.equal(uint256NtOJ2W1, BigInt("0"))
		await expect(UFragmentsGwx9YH9.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})