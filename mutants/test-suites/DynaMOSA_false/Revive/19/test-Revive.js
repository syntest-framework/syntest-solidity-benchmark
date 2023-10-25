const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveS5ysqBF = await Revive.new({from: accounts[3]});
		const uintzuHPzf2 = BigInt("876")
		const bytevDjTPDA = "0x1019061e011013121b151f08051104190d030c02051e121b201110100a04041b"
		const byteFjNkfPh = "0x120614020303021d0605110007000e05070f15100e1e0b03101f161c0e0b0b1f"
		const addressKHsJU0k = accounts[2]
//		const boolCa7TXcI = await ReviveS5ysqBF.increaseLockAmount.call(bytevDjTPDA, uintzuHPzf2, {from: accounts[1]});
//		const uint256Y6KRj7 = await ReviveS5ysqBF.tokensLocked.call(addressKHsJU0k, byteFjNkfPh, {from: accounts[2]});

		await expect(ReviveS5ysqBF.increaseLockAmount.call(bytevDjTPDA, uintzuHPzf2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintRdFRu3h = BigInt("497")
		const addressWJnDuR = accounts[4]
		const addressUiPc5m = accounts[1]
		const addressLnvRIo = await ReviveCEuRo5.owner.call({from: accounts[5]});
		const booldk8iJqa = await ReviveCEuRo5.approve.call(addressWJnDuR, uintRdFRu3h, {from: accounts[0]});
		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressUiPc5m, {from: accounts[4]});

		assert.equal(addressLnvRIo, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(booldk8iJqa, true)
		assert.equal(uint256AH5dB2R, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveybBbZU1 = await Revive.new({from: accounts[3]});
		const addresssWDWiJ = accounts[2]
//		await ReviveybBbZU1.onlyOwner.call({from: accounts[4]});
//		const addressQo86RiN = await ReviveybBbZU1.transferOwnership.call(addresssWDWiJ, {from: accounts[4]});
//		const uint2561KwVNT = await ReviveybBbZU1.totalSupply.call({from: accounts[3]});

		await expect(ReviveybBbZU1.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegJ9c36Q = await Revive.new({from: accounts[2]});
		const addressAxuijw = accounts[1]
		const uintPR72uTt = BigInt("786")
		const bytezfKn5Z = "0x1d141a0a0a06030e0708011f03080911100d020619060e030b05110407161f12"
		const addressdCHmbN1 = accounts[5]
		const uintPX9Lyjv = BigInt("1596")
		const addressIR8qnWo = accounts[0]
		const uinttwWWnW = BigInt("1245")
		const byteqsG6F6W = "0x0c12091a021902201713061110050e0300171015120305191f0a1c1f0f150620"
//		const addressee05dE = await RevivegJ9c36Q.transferOwnership.call(addressAxuijw, {from: accounts[3]});
//		const boolyOxDFwW = await RevivegJ9c36Q.increaseLockAmount.call(bytezfKn5Z, uintPR72uTt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eesiYdp = await RevivegJ9c36Q.unlock.call(addressdCHmbN1, {from: accounts[4]});
//		const boolB8UUQ4u = await RevivegJ9c36Q.approve.call(addressIR8qnWo, uintPX9Lyjv, {from: accounts[5]});
//		const boolmYg6eA = await RevivegJ9c36Q.increaseLockAmount.call(byteqsG6F6W, uinttwWWnW, {from: accounts[3]});

		await expect(RevivegJ9c36Q.transferOwnership.call(addressAxuijw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintNqg9amq = BigInt("1774")
		const uintIhLkdUC = BigInt("1341")
		const bytekH4GmCY = "0x03030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const uintdVjaHJ = BigInt("478")
		const bytePii69Mu = "0x03140901071b141f1419021c061c19041307030e18161b181900181d150f0804"
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(bytekH4GmCY, uintIhLkdUC, uintNqg9amq, {from: accounts[4]});
//		const boolLzHaSOP = await RevivexlSWtKi.extendLock.call(bytePii69Mu, uintdVjaHJ, {from: accounts[5]});

		await expect(RevivexlSWtKi.lock.call(bytekH4GmCY, uintIhLkdUC, uintNqg9amq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCKrt21S = await Revive.new({from: accounts[0]});
		const uintc8lr4D0 = BigInt("1023")
		const addressw4Qivra = accounts[4]
		const uintciY8zxJ = BigInt("1375")
		const addressR75Gpp = accounts[1]
		const addresspMGhNAZ = accounts[1]
		const addressd9o64jq = accounts[3]
		const boolEsjSfYf = await ReviveCKrt21S.increaseAllowance.call(addressw4Qivra, uintc8lr4D0, {from: accounts[0]});
		const boolJwuQNYh = await ReviveCKrt21S.increaseAllowance.call(addressR75Gpp, uintciY8zxJ, {from: accounts[0]});
		const uint256P2PnTei = await ReviveCKrt21S.allowance.call(addressd9o64jq, addresspMGhNAZ, {from: accounts[3]});

		assert.equal(boolEsjSfYf, true)
		assert.equal(boolJwuQNYh, true)
		assert.equal(uint256P2PnTei, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivepcXusV1 = await Revive.new({from: accounts[1]});
		const uintsDzy8Tu = BigInt("1012")
		const bytescFiW2O = "0x09170918040c1f02091f1f0f040401140104120e0c021d0a19140d091b1d1414"
		const addressVdgWRuv = accounts[3]
		const addresscEUUCcb = accounts[2]
		const uintiAUvHYs = BigInt("124")
		const addressPYkbcek = "0x0000000000000000000000000000000000000001"
		const addresspVHFB1 = accounts[4]
		const uintGhmhnTC = BigInt("1004")
		const uintKOTbt9h = BigInt("142")
		const bytekPCRIRJ = "0x04071602020a1f011d03091c1420031c09141211071009080101200f000f0804"
//		const boolTQHAUyf = await RevivepcXusV1.extendLock.call(bytescFiW2O, uintsDzy8Tu, {from: accounts[2]});
//		const uint256dPwExS8 = await RevivepcXusV1.allowance.call(addresscEUUCcb, addressVdgWRuv, {from: accounts[2]});
//		const addressNmXs1gQ = await RevivepcXusV1.recoverERC20.call(addressPYkbcek, uintiAUvHYs, {from: accounts[1]});
//		const uint256m21EggG = await RevivepcXusV1.unlock.call(addresspVHFB1, {from: "0x0000000000000000000000000000000000000001"});
//		await RevivepcXusV1.onlyOwner.call({from: accounts[1]});
//		const boolCltGjwR = await RevivepcXusV1.lock.call(bytekPCRIRJ, uintKOTbt9h, uintGhmhnTC, {from: accounts[2]});

		await expect(RevivepcXusV1.extendLock.call(bytescFiW2O, uintsDzy8Tu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTz5FSVc = await Revive.new({from: accounts[2]});
		const addressiVe23BM = accounts[5]
		const address3imPj8 = accounts[3]
		const uintP2dY7l0 = BigInt("651")
		const uintWM3hKyj = BigInt("1418")
		const bytekIBSzq = "0x180913051b1a151003151903120e1d020f03021414051a051d0f1e201c0e0a15"
		const addressbGA18c = accounts[0]
		const uintVbcM35J = BigInt("1106")
		const uintKppf7ur = BigInt("2040")
		const byteusfnEaz = "0x0f1c16191b03020414091319050e1e031e0c040d09151c03111d0314181f0710"
		const addressVhrJT1G = "0x0000000000000000000000000000000000000001"
		const uintEmwZMU2 = BigInt("1429")
		const byteX0DH0Mw = "0x0d0c050a0e0413141315081317100717011c0d0905010e11181b14180419141d"
		const byteHhBsegc = "0x05061a1c101f0c0d0106110b03031115000c171901061a1716030c040e171d0d"
		const addressUJTMhc2 = accounts[3]
		const uint256c1VgnPQ = await ReviveTz5FSVc.allowance.call(address3imPj8, addressiVe23BM, {from: accounts[4]});
//		const boolVhcTHu = await ReviveTz5FSVc.transferWithLock.call(addressbGA18c, bytekIBSzq, uintWM3hKyj, uintP2dY7l0, {from: accounts[3]});
//		const boolUdRhaLL = await ReviveTz5FSVc.transferWithLock.call(addressVhrJT1G, byteusfnEaz, uintKppf7ur, uintVbcM35J, {from: accounts[0]});
//		const boolL0oOdhS = await ReviveTz5FSVc.extendLock.call(byteX0DH0Mw, uintEmwZMU2, {from: accounts[5]});
//		const uint256Fy1l0Hb = await ReviveTz5FSVc.tokensLocked.call(addressUJTMhc2, byteHhBsegc, {from: accounts[4]});

		assert.equal(uint256c1VgnPQ, BigInt("0"))
		await expect(ReviveTz5FSVc.transferWithLock.call(addressbGA18c, bytekIBSzq, uintWM3hKyj, uintP2dY7l0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintH4BU3Gf = BigInt("1730")
		const addressVcdipQn = accounts[3]
		const uintTZCuay = BigInt("1061")
		const addressh9NKRZ = accounts[0]
		const uintfiGmO9 = BigInt("1774")
		const uintKjQu1I4 = BigInt("1341")
		const byteUAvCurx = "0x03030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const boolsRALJxf = await RevivexlSWtKi.transfer.call(addressVcdipQn, uintH4BU3Gf, {from: accounts[0]});
//		const boolIOviY3J = await RevivexlSWtKi.decreaseAllowance.call(addressh9NKRZ, uintTZCuay, {from: accounts[4]});
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(byteUAvCurx, uintKjQu1I4, uintfiGmO9, {from: accounts[4]});

		assert.equal(boolsRALJxf, true)
		await expect(RevivexlSWtKi.decreaseAllowance.call(addressh9NKRZ, uintTZCuay, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uinteT1bXon = BigInt("1091")
		const byteHvdLebl = "0x1f0e05051b0120100b07071d031c1506040c172008071a0b0517170911141e15"
		const addressvdn9C4y = accounts[4]
		const uintkJB5j34 = BigInt("1774")
		const uintccnnZvZ = BigInt("1476")
		const byteF8iZQP2 = "0x03030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const bytegv5QcdX = "0x1513101b01000d1519101e18110f140e061e021715041504200b0e0b170e0406"
		const addressoLpiUN = accounts[3]
		const uint256FyEFJjr = await RevivexlSWtKi.tokensLockedAtTime.call(addressvdn9C4y, byteHvdLebl, uinteT1bXon, {from: accounts[0]});
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(byteF8iZQP2, uintccnnZvZ, uintkJB5j34, {from: accounts[4]});
//		const uint256qvqj0q = await RevivexlSWtKi.tokensUnlockable.call(addressoLpiUN, bytegv5QcdX, {from: accounts[4]});

		assert.equal(uint256FyEFJjr, BigInt("0"))
		await expect(RevivexlSWtKi.lock.call(byteF8iZQP2, uintccnnZvZ, uintkJB5j34, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintcFB1Z6U = BigInt("497")
		const addresssDTCD4U = accounts[5]
		const addressMsMyCo = accounts[2]
		const uintg4s7qSS = BigInt("368")
		const byteg9v1b40 = "0x1d191306010416060d190d081109030b0b04040606161c0712021e0c0a12021c"
		const addressouiuA23 = accounts[2]
		const addressLnvRIo = await ReviveCEuRo5.owner.call({from: accounts[5]});
		const booldk8iJqa = await ReviveCEuRo5.approve.call(addresssDTCD4U, uintcFB1Z6U, {from: accounts[0]});
		const addressxx1pvq8 = await ReviveCEuRo5.transferOwnership.call(addressMsMyCo, {from: accounts[2]});
		const addressY50G9z = await ReviveCEuRo5.owner.call({from: accounts[4]});
//		const boolx0Tm64j = await ReviveCEuRo5.increaseLockAmount.call(byteg9v1b40, uintg4s7qSS, {from: accounts[3]});
//		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressouiuA23, {from: accounts[4]});

		assert.equal(addressLnvRIo, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(addressY50G9z, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(booldk8iJqa, true)
		await expect(ReviveCEuRo5.increaseLockAmount.call(byteg9v1b40, uintg4s7qSS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addresshN9UUxV = accounts[0]
		const addressEqPX7bj = accounts[2]
		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addresshN9UUxV, {from: accounts[3]});
		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressEqPX7bj, {from: accounts[4]});

		assert.equal(uint256AH5dB2R, BigInt("3000000000000000000000000000"))
		assert.equal(uint256tUrhWF0, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintpVhSj4P = BigInt("1091")
		const byteeH7AdN = "0x1f0e05051b0120100b07071d031c1506040c172008071a0b0517170911141e15"
		const addressLUzsnbS = accounts[4]
		const byteSKN5JMV = "0x1513101b01000d1519101e18110f140e061e021715041504200b0e0b170e0406"
		const addressqvcFOty = accounts[3]
		const uint256FyEFJjr = await RevivexlSWtKi.tokensLockedAtTime.call(addressLUzsnbS, byteeH7AdN, uintpVhSj4P, {from: accounts[0]});
		const addresszisMPYv = await RevivexlSWtKi.owner.call({from: accounts[2]});
		const uint256qvqj0q = await RevivexlSWtKi.tokensUnlockable.call(addressqvcFOty, byteSKN5JMV, {from: accounts[4]});

		assert.equal(addresszisMPYv, 0xe41bF28B619DB8158f8A898E4115680D6f361D55)
		assert.equal(uint256FyEFJjr, BigInt("0"))
		assert.equal(uint256qvqj0q, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintvZmCASQ = BigInt("1091")
		const byteMkNdJW2 = "0x1f0e05051b0120100b07071d031c1506040c172008071a0b0517170911141e15"
		const addressLhE8fnk = accounts[5]
		const uintt5oFuA = BigInt("59")
		const addresstNEixJ = accounts[0]
		const addressRw8wit8 = accounts[3]
		const uintHIOWhA5 = BigInt("1774")
		const uintXM9cTXE = BigInt("1476")
		const bytejfNxiz = "0x03030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const address1yY0g4 = accounts[4]
		const byteOyJBZiK = "0x150809041213010a190c0b0903051605160f1705191315160a1611021f091e0e"
		const addressyP5ftbi = accounts[4]
		const byteDwp2eVM = "0x1513101b01000d1519101e18110f140e061e021715041504200b0e0b170e0406"
		const addressqAuEWg = accounts[3]
		const uint256FyEFJjr = await RevivexlSWtKi.tokensLockedAtTime.call(addressLhE8fnk, byteMkNdJW2, uintvZmCASQ, {from: accounts[0]});
//		const boolbKMCqUn = await RevivexlSWtKi.transferFrom.call(addressRw8wit8, addresstNEixJ, uintt5oFuA, {from: accounts[3]});
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(bytejfNxiz, uintXM9cTXE, uintHIOWhA5, {from: accounts[4]});
//		const uint256H2Z1XQK = await RevivexlSWtKi.totalBalanceOf.call(address1yY0g4, {from: accounts[3]});
//		const uint256v5lBRpl = await RevivexlSWtKi.tokensUnlockable.call(addressyP5ftbi, byteOyJBZiK, {from: accounts[4]});
//		const uint256qvqj0q = await RevivexlSWtKi.tokensUnlockable.call(addressqAuEWg, byteDwp2eVM, {from: accounts[4]});

		assert.equal(uint256FyEFJjr, BigInt("0"))
		await expect(RevivexlSWtKi.transferFrom.call(addressRw8wit8, addresstNEixJ, uintt5oFuA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintj4WfwZ8 = BigInt("1427")
		const addressBzjSUV0 = accounts[1]
		const addressst9RP1v = accounts[2]
//		const uint256uLNIaGU = await ReviveCEuRo5.recoverERC20.call(uintj4WfwZ8, {from: accounts[3]});
//		const uint256S1fGSKL = await ReviveCEuRo5.totalBalanceOf.call(addressBzjSUV0, {from: accounts[4]});
//		const boolDC1732Y = await ReviveCEuRo5.isOwner.call({from: accounts[3]});
//		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressst9RP1v, {from: accounts[4]});

		await expect(ReviveCEuRo5.recoverERC20.call(uintj4WfwZ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexfZyS7O = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHWoTHaO = BigInt("1077")
		const bytev0N4a2z = "0x11170e0a0716060b1d0d011e14090a1d09180b2016011907030f1414181c180c"
		const uintzCtinSR = BigInt("673")
		const addressT6SkMd5 = accounts[4]
		const addressxoQJsxC = accounts[3]
		const uintWrnD8c = BigInt("1999")
		const addressENIpqX = accounts[0]
		const addressU4pJS8t = accounts[3]
		const boolEYyLwVd = await RevivexfZyS7O.increaseLockAmount.call(bytev0N4a2z, uintHWoTHaO, {from: accounts[2]});
		const boolm3Loev = await RevivexfZyS7O.transferFrom.call(addressxoQJsxC, addressT6SkMd5, uintzCtinSR, {from: accounts[3]});
		const booliHyotW = await RevivexfZyS7O.transferFrom.call(addressU4pJS8t, addressENIpqX, uintWrnD8c, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintwwM51KR = BigInt("1774")
		const uintC0LoNMQ = BigInt("1276")
		const byteSZArakT = "0x03030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const uint256g7Yc5Sf = await RevivexlSWtKi.totalSupply.call({from: accounts[2]});
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(byteSZArakT, uintC0LoNMQ, uintwwM51KR, {from: accounts[4]});

		assert.equal(uint256g7Yc5Sf, BigInt("3000000000000000000000000000"))
		await expect(RevivexlSWtKi.lock.call(byteSZArakT, uintC0LoNMQ, uintwwM51KR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressaRnK6I1 = accounts[2]
		const uintJo610hY = BigInt("953")
		const uintM0bsdF = BigInt("362")
		const bytei6oC8pX = "0x1c1c0d0d1208071c1a03151c001c031c181701050c141f08082019111919180b"
		const addressciJwXvz = accounts[4]
		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressaRnK6I1, {from: accounts[4]});
//		await ReviveCEuRo5.renounceOwnership.call({from: accounts[2]});
//		const boolIpiLATw = await ReviveCEuRo5.transferWithLock.call(addressciJwXvz, bytei6oC8pX, uintM0bsdF, uintJo610hY, {from: accounts[0]});

		assert.equal(uint256AH5dB2R, BigInt("3000000000000000000000000000"))
		await expect(ReviveCEuRo5.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressYgnZKUY = accounts[5]
		const uintO4IpzSU = BigInt("275")
		const addressZ7Nn8XD = accounts[0]
		const uintdZhf6dE = BigInt("68")
		const byteVsE44l2 = "0x1d0a0f0b01201d090e091e02101a111a1312110b0804080b0e0c1e171e1c0715"
		const addressEb9tq7C = accounts[5]
		const uint256HyR99mM = await ReviveCEuRo5.totalBalanceOf.call(addressYgnZKUY, {from: accounts[4]});
//		const addressn0fVtiK = await ReviveCEuRo5.recoverERC20.call(addressZ7Nn8XD, uintO4IpzSU, {from: accounts[2]});
//		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(addressEb9tq7C, byteVsE44l2, uintdZhf6dE, {from: accounts[0]});

		assert.equal(uint256HyR99mM, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(addressZ7Nn8XD, uintO4IpzSU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTz5FSVc = await Revive.new({from: accounts[2]});
		const byteV8CglPY = "0x05010c1711030c131b111302181e1403111b0b090209100a1e09111f170b140e"
		const addressrZr8gal = accounts[0]
		const addressClB0H43 = accounts[4]
		const uints9GdRrE = BigInt("651")
		const uintD6Zu4oX = BigInt("1438")
		const byteReQQxAC = "0x180913051b1a151003151903120e1d020f03021414051a051d0f1e201c0e0a15"
		const addressz4pOhiP = accounts[0]
		const bytef72Np2 = "0x05061a1c101f0c0d0106110b03031115000c171901061a1716030c040e171d0d"
		const addressE6hSi33 = accounts[3]
		const uint256XnZayic = await ReviveTz5FSVc.tokensUnlockable.call(addressrZr8gal, byteV8CglPY, {from: accounts[0]});
		const uint256h3pYZAe = await ReviveTz5FSVc.getUnlockableTokens.call(addressClB0H43, {from: accounts[3]});
//		const boolVhcTHu = await ReviveTz5FSVc.transferWithLock.call(addressz4pOhiP, byteReQQxAC, uintD6Zu4oX, uints9GdRrE, {from: accounts[3]});
//		const uint256Fy1l0Hb = await ReviveTz5FSVc.tokensLocked.call(addressE6hSi33, bytef72Np2, {from: accounts[4]});

		assert.equal(uint256XnZayic, BigInt("0"))
		assert.equal(uint256h3pYZAe, BigInt("0"))
		await expect(ReviveTz5FSVc.transferWithLock.call(addressz4pOhiP, byteReQQxAC, uintD6Zu4oX, uints9GdRrE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTz5FSVc = await Revive.new({from: accounts[2]});
		const uintnFVxleg = BigInt("727")
		const addressnTC68d6 = accounts[3]
		const byteR8bl92u = "0x05010c1711030c131b111302181e1403111b0b090209100a1e09111f170b140e"
		const addressI8yUi96 = accounts[0]
		const addressJAPa455 = accounts[4]
		const uintAd0tHI3 = BigInt("651")
		const uintKExXoc = BigInt("1438")
		const bytej0BOpb = "0x180913051b1a171003151903120e1d020f03021414051a051d0f1f201c0e0a15"
		const address7dg3vK = accounts[0]
		const uintHIUNt7J = BigInt("680")
		const byteFe1z8p9 = "0x0e0109181b0c1b1f171f1501171c1c0f1d1809190b18111b19020b10111f1e1c"
		const addresshvlmhPQ = accounts[2]
		const byteylWfyiV = "0x05061a1c101f0c0d0106110b03031115000c171901061a1716030c040e171d0d"
		const addressr3KrCig = accounts[3]
//		const uint256NZIyLI = await ReviveTz5FSVc.recoverERC20.call(uintnFVxleg, {from: accounts[1]});
//		const uint256qbxsWvZ = await ReviveTz5FSVc.unlock.call(addressnTC68d6, {from: accounts[1]});
//		const uint256XnZayic = await ReviveTz5FSVc.tokensUnlockable.call(addressI8yUi96, byteR8bl92u, {from: accounts[0]});
//		const uint256h3pYZAe = await ReviveTz5FSVc.getUnlockableTokens.call(addressJAPa455, {from: accounts[3]});
//		const boolVhcTHu = await ReviveTz5FSVc.transferWithLock.call(address7dg3vK, bytej0BOpb, uintKExXoc, uintAd0tHI3, {from: accounts[3]});
//		const uint256s8n1p69 = await ReviveTz5FSVc.tokensLockedAtTime.call(addresshvlmhPQ, byteFe1z8p9, uintHIUNt7J, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Fy1l0Hb = await ReviveTz5FSVc.tokensLocked.call(addressr3KrCig, byteylWfyiV, {from: accounts[4]});

		await expect(ReviveTz5FSVc.recoverERC20.call(uintnFVxleg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivef62trRR = await Revive.new({from: accounts[1]});
		const uintR78Heu = BigInt("599")
		const byteZ8uqxz8 = "0x02051d08070a1b041b09020e1a1e1d08090e06081403131c15021c171d141904"
		const addressgg4cNmf = "0x0000000000000000000000000000000000000001"
		const uintS2ytyy3 = BigInt("239")
		const addressfFXny9j = accounts[1]
		const uintHWlR8uA = BigInt("1940")
		const uintkiXwZd = BigInt("2027")
		const uintsjRScZ = BigInt("240")
		const bytehzlnEiN = "0x04031a0f1f03071f0e040d01180c180118020f071e1c1515170c131a0a070b08"
		const addressTBR2KsS = accounts[4]
		const uintCEmFG97 = BigInt("156")
		const addressoguDahs = accounts[0]
		const uintpRxmBou = BigInt("879")
		const uint256asHcA7n = await Revivef62trRR.tokensLockedAtTime.call(addressgg4cNmf, byteZ8uqxz8, uintR78Heu, {from: accounts[4]});
		const boolD259wcw = await Revivef62trRR.increaseAllowance.call(addressfFXny9j, uintS2ytyy3, {from: accounts[2]});
//		const uint2563aApwo = await Revivef62trRR.recoverERC20.call(uintHWlR8uA, {from: accounts[2]});
//		const boolB3TBd2X = await Revivef62trRR.transferWithLock.call(addressTBR2KsS, bytehzlnEiN, uintsjRScZ, uintkiXwZd, {from: accounts[3]});
//		const boolxGvEnr = await Revivef62trRR.decreaseAllowance.call(addressoguDahs, uintCEmFG97, {from: accounts[2]});
//		const uint256biLsAai = await Revivef62trRR.recoverERC20.call(uintpRxmBou, {from: accounts[0]});

		assert.equal(boolD259wcw, true)
		assert.equal(uint256asHcA7n, BigInt("0"))
		await expect(Revivef62trRR.recoverERC20.call(uintHWlR8uA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE1BOxOJ = await Revive.new({from: accounts[2]});
		const uintoNqfYFv = BigInt("1132")
		const addressSQdWa6I = accounts[4]
		const addressrN0kr5 = accounts[1]
		const addressNr46e0h = accounts[4]
		const addressT6Ak0Lm = accounts[3]
		const addresssOTfyam = accounts[3]
		const uintxUYLuzc = BigInt("1049")
		const addressquErexA = accounts[2]
//		const uint256nyB8eA0 = await ReviveE1BOxOJ.recoverERC20.call(uintoNqfYFv, {from: accounts[1]});
//		const uint256rcdFKtI = await ReviveE1BOxOJ.unlock.call(addressSQdWa6I, {from: accounts[1]});
//		const uint256sNvzJQs = await ReviveE1BOxOJ.unlock.call(addressrN0kr5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256akHtqjl = await ReviveE1BOxOJ.allowance.call(addressT6Ak0Lm, addressNr46e0h, {from: accounts[0]});
//		const uint256d0KZx4v = await ReviveE1BOxOJ.balanceOf.call(addresssOTfyam, {from: accounts[4]});
//		const bools5AOYG0 = await ReviveE1BOxOJ.increaseAllowance.call(addressquErexA, uintxUYLuzc, {from: accounts[4]});

		await expect(ReviveE1BOxOJ.recoverERC20.call(uintoNqfYFv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCCAIGvj = await Revive.new({from: accounts[2]});
		const byteEQujzC = "0x0608011f130c03071208021c0a0f1a0d1d0706140608101d0806110505080b20"
		const addressVW1Kw7Y = accounts[1]
		const uintX5dv0WG = BigInt("1864")
		const uint256MThdZAL = await ReviveCCAIGvj.tokensUnlockable.call(addressVW1Kw7Y, byteEQujzC, {from: accounts[2]});
//		const uint2562HqiWU = await ReviveCCAIGvj.recoverERC20.call(uintX5dv0WG, {from: accounts[5]});

		assert.equal(uint256MThdZAL, BigInt("0"))
		await expect(ReviveCCAIGvj.recoverERC20.call(uintX5dv0WG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintBqtXtOy = BigInt("1131")
		const byteJwuTKbL = "0x1d0a0f0b01201d090e091e02101a111a1312110b0804080b0e0c1e171e1c0715"
		const addressUaHkjky = accounts[6]
		const uintcIqrqvB = BigInt("598")
		const addresseg367LK = accounts[3]
		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(addressUaHkjky, byteJwuTKbL, uintBqtXtOy, {from: accounts[0]});
//		const uint256qWx0m9i = await ReviveCEuRo5.recoverERC20.call(uintcIqrqvB, {from: accounts[2]});
//		const uint256aWMxId1 = await ReviveCEuRo5.totalBalanceOf.call(addresseg367LK, {from: accounts[2]});

		assert.equal(uint256TYtE3Z2, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintcIqrqvB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressZkyxVZ = accounts[4]
		const addresso4x6ssS = accounts[1]
		const uintQDfP1RW = BigInt("1318")
		const uint256EFtGmRX = await ReviveCEuRo5.getUnlockableTokens.call(addressZkyxVZ, {from: accounts[5]});
		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addresso4x6ssS, {from: accounts[3]});
//		const uint256LEHyxk = await ReviveCEuRo5.recoverERC20.call(uintQDfP1RW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EFtGmRX, BigInt("0"))
		assert.equal(uint256tUrhWF0, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintQDfP1RW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintOKkk6xf = BigInt("138")
		const addressrXrXS1 = accounts[5]
//		const uint256myD66cR = await ReviveCEuRo5.recoverERC20.call(uintOKkk6xf, {from: accounts[4]});
//		const uint256uNtMJkh = await ReviveCEuRo5.getUnlockableTokens.call(addressrXrXS1, {from: accounts[0]});

		await expect(ReviveCEuRo5.recoverERC20.call(uintOKkk6xf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressTtsBbO4 = accounts[4]
		const uintdHg24Cm = BigInt("1309")
		const addresscVbfmbq = accounts[3]
		const addressyOM4R1f = accounts[4]
		const uint256VhN6Ac = await ReviveCEuRo5.getUnlockableTokens.call(addressTtsBbO4, {from: accounts[2]});
//		const uint256Aw1JqHM = await ReviveCEuRo5.recoverERC20.call(uintdHg24Cm, {from: accounts[2]});
//		const uint256bqQEL48 = await ReviveCEuRo5.unlock.call(addresscVbfmbq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressyOM4R1f, {from: accounts[4]});

		assert.equal(uint256VhN6Ac, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintdHg24Cm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uint21UkII = BigInt("1477")
		const addressX7lyK5X = accounts[1]
		const addressKqDb5dq = accounts[1]
		const addresssscQWyl = accounts[1]
		const uintSOphnJX = BigInt("971")
		const boolJ9fZpqX = await ReviveCEuRo5.transfer.call(addressX7lyK5X, uint21UkII, {from: accounts[2]});
		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addressKqDb5dq, {from: accounts[3]});
		const uint256CytEbEs = await ReviveCEuRo5.unlock.call(addresssscQWyl, {from: accounts[4]});
//		const uint256dNQuUeP = await ReviveCEuRo5.recoverERC20.call(uintSOphnJX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ9fZpqX, true)
		assert.equal(uint256CytEbEs, BigInt("0"))
		assert.equal(uint256tUrhWF0, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintSOphnJX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressF4266E7 = accounts[2]
		const uintTgp41Vy = BigInt("89")
		const uintFCimxl = BigInt("1769")
		const uintxLSVS5Z = BigInt("872")
		const bytehzCeOA0 = "0x1507100e0c080e120f1302100509101a0c020203141315030c0801191f040409"
		const addressLnDbUA7 = accounts[1]
		const uint256AH5dB2R = await ReviveCEuRo5.totalBalanceOf.call(addressF4266E7, {from: accounts[4]});
//		const uint256F7JKPe7 = await ReviveCEuRo5.recoverERC20.call(uintTgp41Vy, {from: accounts[1]});
//		const boolLcnIrHg = await ReviveCEuRo5.transferWithLock.call(addressLnDbUA7, bytehzCeOA0, uintxLSVS5Z, uintFCimxl, {from: accounts[4]});

		assert.equal(uint256AH5dB2R, BigInt("3000000000000000000000000000"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintTgp41Vy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivePPMVEO0 = await Revive.new({from: accounts[4]});
		const uintrH4JIqR = BigInt("703")
		const bytesEDpsHN = "0x1f0501060902170c0f03110d1b07181e12070b0315100218021a081a190e1a1c"
		const addressVjkIdWH = accounts[4]
		const addressjCKb3UN = accounts[1]
		const uintFUcLCx = BigInt("817")
		const addressAYfYdjF = accounts[2]
//		const uint256fYlByxH = await RevivePPMVEO0.recoverERC20.call(uintrH4JIqR, {from: accounts[2]});
//		const addressYGqeTt5 = await RevivePPMVEO0.owner.call({from: accounts[0]});
//		const uint256c4YavtU = await RevivePPMVEO0.tokensLocked.call(addressVjkIdWH, bytesEDpsHN, {from: accounts[3]});
//		const uint256T9NZOS = await RevivePPMVEO0.getUnlockableTokens.call(addressjCKb3UN, {from: accounts[0]});
//		const boolALkQRUp = await RevivePPMVEO0.approve.call(addressAYfYdjF, uintFUcLCx, {from: accounts[4]});

		await expect(RevivePPMVEO0.recoverERC20.call(uintrH4JIqR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const byteTDgRdlo = "0x0d0f001918030f18141a13170515060b0b0603080f172000061b1b10090a0b0d"
		const addresseTkpeYy = accounts[4]
		const uintYKfoJfk = BigInt("68")
		const bytedyCXSPu = "0x0f0b18101e0d061c0c0817091d1f181d070a0311130113031a0a131215140916"
		const addressTWjcJDB = accounts[5]
		const uintH3ZtYXA = BigInt("541")
		const addressfWDHsaQ = "0x0000000000000000000000000000000000000000"
		const uintIsDDVly = BigInt("364")
		const uintrAkrKVR = BigInt("595")
		const byteXY8qqEx = "0x170d111e061c05150a1d0b0b1c091c1300150b0811031112151613090106200b"
		const addressqaAk7MC = accounts[5]
		const addressHBw8OA = accounts[6]
		const uintW9fuIGB = BigInt("1961")
		const addressqaqoQhI = accounts[4]
		const addressz1tKfFa = accounts[0]
		const uintFwD7HWJ = BigInt("860")
		const byteHWCNft = "0x181a1e010804090d02130c051a021c15130001160b1a0d151e0d1714081b1b04"
		const addressXvuVH6Y = accounts[4]
		const uintbNoouHe = BigInt("1103")
		const addresslWPOjAn = accounts[2]
		const addressf0QJWGg = accounts[2]
		const addressVCyMlMR = accounts[0]
		const addressGB8oy0k = accounts[0]
		const addressmmS4ZON = accounts[4]
		const uint256COGJbdv = await ReviveCEuRo5.tokensLocked.call(addresseTkpeYy, byteTDgRdlo, {from: accounts[1]});
		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(addressTWjcJDB, bytedyCXSPu, uintYKfoJfk, {from: accounts[0]});
//		const uint256OmoQI7J = await ReviveCEuRo5.recoverERC20.call(uintH3ZtYXA, {from: accounts[0]});
//		const uint256k6HcxQG = await ReviveCEuRo5.unlock.call(addressfWDHsaQ, {from: accounts[2]});
//		const boolifdF1B = await ReviveCEuRo5.transferWithLock.call(addressqaAk7MC, byteXY8qqEx, uintrAkrKVR, uintIsDDVly, {from: accounts[2]});
//		const addressXkwQs2X = await ReviveCEuRo5.owner.call({from: accounts[0]});
//		const uint256sxsqv0i = await ReviveCEuRo5.getUnlockableTokens.call(addressHBw8OA, {from: accounts[2]});
//		const boolIGHlabU = await ReviveCEuRo5.transferFrom.call(addressz1tKfFa, addressqaqoQhI, uintW9fuIGB, {from: accounts[1]});
//		const boolrzXDrZu = await ReviveCEuRo5.extendLock.call(byteHWCNft, uintFwD7HWJ, {from: accounts[1]});
//		const addressQJA1GY0 = await ReviveCEuRo5.transferOwnership.call(addressXvuVH6Y, {from: accounts[2]});
//		const boolNCGfuh = await ReviveCEuRo5.transferFrom.call(addressf0QJWGg, addresslWPOjAn, uintbNoouHe, {from: accounts[0]});
//		const addressl9CJRZa = await ReviveCEuRo5.transferOwnership.call(addressVCyMlMR, {from: accounts[0]});
//		const uint256gjlYHnx = await ReviveCEuRo5.totalBalanceOf.call(addressGB8oy0k, {from: accounts[0]});
//		const uint256tqkQGuO = await ReviveCEuRo5.totalBalanceOf.call(addressmmS4ZON, {from: accounts[3]});
//		const boolphnhRTN = await ReviveCEuRo5.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ReviveCEuRo5.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256COGJbdv, BigInt("0"))
		assert.equal(uint256TYtE3Z2, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintH3ZtYXA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressGJy7N8Y = accounts[2]
		const uintYDSJskr = BigInt("796")
		const address6Ld6Z7 = accounts[0]
		const uint256C81Uq8H = await ReviveCEuRo5.getUnlockableTokens.call(addressGJy7N8Y, {from: accounts[1]});
//		const uint256uo53NL2 = await ReviveCEuRo5.recoverERC20.call(uintYDSJskr, {from: accounts[2]});
//		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(address6Ld6Z7, {from: accounts[3]});

		assert.equal(uint256C81Uq8H, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintYDSJskr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintb5RcLaA = BigInt("68")
		const byteaZ0kBil = "0x0f0b18101e0d061c0c0817091d1f181d070a0311130113031a0a131215140916"
		const address06Caio = accounts[5]
		const addresschni4Sp = "0x00000000000000000000000000000000000000-1"
		const uintVUrF3EG = BigInt("364")
		const uintMcjneD = BigInt("595")
		const byteZdgdW1v = "0x170d111e061c05150a1d0b0b1c091c1300150b0811031112151613090106200b"
		const addressnqB6fnj = accounts[5]
		const addresshkF03qF = "0x0000000000000000000000000000000000000001"
		const uintEkv7u69 = BigInt("1943")
		const uintmpQiAJN = BigInt("1364")
		const byteKsEFv0g = "0x10001a11080b031d17151a080e091c01030d04060e121f021a101c02131c1206"
		const addresszNQ7ZS4 = accounts[0]
		const addressbuFQdPR = accounts[0]
		const addressKFGtawB = accounts[5]
		const bytefJBjhRZ = "0x080e141e151d04120a1b180b19130511081b05060d10010a08061d181f061517"
		const addressmLScTJ1 = accounts[4]
		const uintLZW5GAr = BigInt("1961")
		const addressPyDFWUV = accounts[4]
		const addressP6upQme = accounts[0]
		const addressqTfJK5D = accounts[3]
		const addresswYUTuYJ = accounts[4]
		const uintsVfGth = BigInt("1103")
		const addressHD7WDs6 = accounts[2]
		const addressHKccO7d = accounts[2]
		const addressxdtgPRY = accounts[1]
		const addressYvX6scy = accounts[0]
		const addressFpF11dn = accounts[4]
		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(address06Caio, byteaZ0kBil, uintb5RcLaA, {from: accounts[0]});
//		const uint256k6HcxQG = await ReviveCEuRo5.unlock.call(addresschni4Sp, {from: accounts[2]});
//		const boolifdF1B = await ReviveCEuRo5.transferWithLock.call(addressnqB6fnj, byteZdgdW1v, uintMcjneD, uintVUrF3EG, {from: accounts[2]});
//		const uint256feSLnap = await ReviveCEuRo5.getUnlockableTokens.call(addresshkF03qF, {from: accounts[4]});
//		const addressXkwQs2X = await ReviveCEuRo5.owner.call({from: accounts[0]});
//		const boolA3Evuto = await ReviveCEuRo5.lock.call(byteKsEFv0g, uintmpQiAJN, uintEkv7u69, {from: accounts[3]});
//		const uint256BM7fCSf = await ReviveCEuRo5.allowance.call(addressbuFQdPR, addresszNQ7ZS4, {from: accounts[0]});
//		const uint256sxsqv0i = await ReviveCEuRo5.getUnlockableTokens.call(addressKFGtawB, {from: accounts[2]});
//		const uint256rMY1ZLI = await ReviveCEuRo5.tokensUnlockable.call(addressmLScTJ1, bytefJBjhRZ, {from: accounts[4]});
//		const boolIGHlabU = await ReviveCEuRo5.transferFrom.call(addressP6upQme, addressPyDFWUV, uintLZW5GAr, {from: accounts[1]});
//		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addressqTfJK5D, {from: accounts[3]});
//		const addressQJA1GY0 = await ReviveCEuRo5.transferOwnership.call(addresswYUTuYJ, {from: accounts[2]});
//		const boolNCGfuh = await ReviveCEuRo5.transferFrom.call(addressHKccO7d, addressHD7WDs6, uintsVfGth, {from: accounts[0]});
//		const addressl9CJRZa = await ReviveCEuRo5.transferOwnership.call(addressxdtgPRY, {from: accounts[0]});
//		const uint256gjlYHnx = await ReviveCEuRo5.totalBalanceOf.call(addressYvX6scy, {from: accounts[0]});
//		const uint256tqkQGuO = await ReviveCEuRo5.totalBalanceOf.call(addressFpF11dn, {from: accounts[3]});
//		await ReviveCEuRo5.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256TYtE3Z2, BigInt("0"))
		await expect(ReviveCEuRo5.unlock.call(addresschni4Sp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addresspURtE3h = accounts[5]
		const uintgzNIALe = BigInt("1687")
		const addressyjdj4Wg = accounts[0]
		const byteHBkJ2kd = "0x051a051d2013150c090718070e1005061112051f020a0c1509130d150516061f"
		const addressaZlv4uH = accounts[4]
		const uintKOdrB5p = BigInt("844")
		const uintNacXe2T = BigInt("9")
		const byteqcdBqq = "0x071e1b18071601120c081f011b06040313001c0d130d191102120c181609040d"
		const uint256EFtGmRX = await ReviveCEuRo5.getUnlockableTokens.call(addresspURtE3h, {from: accounts[5]});
		const addressBCdU6wa = await ReviveCEuRo5.owner.call({from: accounts[1]});
//		const uint256AfuVuCf = await ReviveCEuRo5.recoverERC20.call(uintgzNIALe, {from: accounts[5]});
//		const uint256fjQzlXP = await ReviveCEuRo5.getUnlockableTokens.call(addressyjdj4Wg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JADYoGt = await ReviveCEuRo5.tokensUnlockable.call(addressaZlv4uH, byteHBkJ2kd, {from: accounts[2]});
//		const boolOLir40 = await ReviveCEuRo5.lock.call(byteqcdBqq, uintNacXe2T, uintKOdrB5p, {from: accounts[2]});

		assert.equal(addressBCdU6wa, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(uint256EFtGmRX, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintgzNIALe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressasqChcp = accounts[1]
		const uintHe4CoO = BigInt("1386")
		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addressasqChcp, {from: accounts[3]});
//		const uint256lSrLIUJ = await ReviveCEuRo5.recoverERC20.call(uintHe4CoO, {from: accounts[3]});

		assert.equal(uint256tUrhWF0, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintHe4CoO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintS3BX9RT = BigInt("1904")
		const addressndYHJrx = accounts[3]
		const uintO0dIBf3 = BigInt("1924")
		const uintqT7i5s = BigInt("1069")
		const byteq8Y8WDl = "0x021210130e1e19172015161c170c1114140a1014011c19131e1e1d11121b0303"
		const addresslxx0R2X = "0x0000000000000000000000000000000000000001"
		const uint6liKg5 = BigInt("463")
		const uintUZRuyL = BigInt("1902")
		const byteXw4dZao = "0x120a17110910021b171e131b18121501050c1f0f171308000a1a0d0a0e0b1a18"
		const addressSamJ954 = accounts[4]
		const uintmq8ZXBN = BigInt("47")
		const bytedPnRxV = "0x1d0c0f0b01201d090e091e02101a111a1312110b0804080b0e0c1e171e1c0415"
		const addressDrKD9lX = accounts[6]
		const boolY4D5XfF = await ReviveCEuRo5.approve.call(addressndYHJrx, uintS3BX9RT, {from: accounts[1]});
//		const uint256R7m2Gmp = await ReviveCEuRo5.recoverERC20.call(uintO0dIBf3, {from: accounts[1]});
//		const uint256prwrVhx = await ReviveCEuRo5.tokensLockedAtTime.call(addresslxx0R2X, byteq8Y8WDl, uintqT7i5s, {from: accounts[2]});
//		const boolp2fedvB = await ReviveCEuRo5.transferWithLock.call(addressSamJ954, byteXw4dZao, uintUZRuyL, uint6liKg5, {from: accounts[2]});
//		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(addressDrKD9lX, bytedPnRxV, uintmq8ZXBN, {from: accounts[0]});

		assert.equal(boolY4D5XfF, true)
		await expect(ReviveCEuRo5.recoverERC20.call(uintO0dIBf3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressrGdnmdY = "0x0000000000000000000000000000000000000002"
		const uintQmobXUY = BigInt("1277")
		const addressOsuL3l9 = accounts[0]
		const uinteniV4z = BigInt("47")
		const byteO5aCBge = "0x1d0a0f0b01201d090e091e02101a0d1a1312110b0804080b0e0c1e171e1c0715"
		const addressDaLQmAm = accounts[6]
		const uintpo2yFgS = BigInt("982")
		const uintG5doC5q = BigInt("1124")
		const bytePvpE38V = "0x0011061c1f0c09011f09080e20070c1a19171a130f1f091d0801040d0b110408"
		const addressBS8F6xJ = await ReviveCEuRo5.owner.call({from: accounts[1]});
		const uint256f8DsCyD = await ReviveCEuRo5.unlock.call(addressrGdnmdY, {from: accounts[3]});
//		const uint256zdp1VqA = await ReviveCEuRo5.recoverERC20.call(uintQmobXUY, {from: accounts[1]});
//		const uint256pKVaVfO = await ReviveCEuRo5.getUnlockableTokens.call(addressOsuL3l9, {from: accounts[0]});
//		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(addressDaLQmAm, byteO5aCBge, uinteniV4z, {from: accounts[0]});
//		const booltD74cyJ = await ReviveCEuRo5.lock.call(bytePvpE38V, uintG5doC5q, uintpo2yFgS, {from: accounts[4]});

		assert.equal(addressBS8F6xJ, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(uint256f8DsCyD, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintQmobXUY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const uintPTPLWmu = BigInt("1923")
		const bytezDUI9q7 = "0x0e040c09040b0312040d0104031b00000c031e0f14070f05041318140b0f090a"
		const addressypuoUZt = accounts[2]
		const addressFwFBq8a = "0x0000000000000000000000000000000000000001"
		const uintvYkSZnO = BigInt("47")
		const byteYb8pdJ9 = "0x1d0a0f0b01201d090e091effffffff101a0d1a1312110b0804080b0e0c1e171e1c0715"
		const address4WwI3p = accounts[6]
		const addressBS8F6xJ = await ReviveCEuRo5.owner.call({from: accounts[1]});
		const uint256YoTndzv = await ReviveCEuRo5.tokensLockedAtTime.call(addressypuoUZt, bytezDUI9q7, uintPTPLWmu, {from: accounts[0]});
		const uint256f8DsCyD = await ReviveCEuRo5.unlock.call(addressFwFBq8a, {from: accounts[3]});
//		const uint256TYtE3Z2 = await ReviveCEuRo5.tokensLockedAtTime.call(address4WwI3p, byteYb8pdJ9, uintvYkSZnO, {from: accounts[0]});

		assert.equal(addressBS8F6xJ, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		assert.equal(uint256YoTndzv, BigInt("0"))
		assert.equal(uint256f8DsCyD, BigInt("0"))
		await expect(ReviveCEuRo5.tokensLockedAtTime.call(address4WwI3p, byteYb8pdJ9, uintvYkSZnO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexlSWtKi = await Revive.new({from: accounts[0]});
		const uintcGPODsV = BigInt("1774")
		const uintMXRKd7 = BigInt("1314")
		const byteCvaBivq = "0xfffffffe030c131e20011a081c0d1c1f14031a020b151d160208180c021c050d181012"
		const byteh776VUN = "0x030517031108141b0a20161614160808070f071e1917120316141a0213170819"
		const addressCqL1wVt = "0x0000000000000000000000000000000000000001"
//		const boolv3QtzEf = await RevivexlSWtKi.lock.call(byteCvaBivq, uintMXRKd7, uintcGPODsV, {from: accounts[4]});
//		const uint256m3uLvO6 = await RevivexlSWtKi.tokensLocked.call(addressCqL1wVt, byteh776VUN, {from: accounts[0]});

		await expect(RevivexlSWtKi.lock.call(byteCvaBivq, uintMXRKd7, uintcGPODsV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCEuRo5 = await Revive.new({from: accounts[2]});
		const addressJMMITZG = accounts[0]
		const addressleom686 = accounts[0]
		const uintFluIARW = BigInt("590")
		const uint256tUrhWF0 = await ReviveCEuRo5.unlock.call(addressJMMITZG, {from: accounts[3]});
		const uint256HdQGZft = await ReviveCEuRo5.getUnlockableTokens.call(addressleom686, {from: accounts[0]});
//		const uint256jSC417 = await ReviveCEuRo5.recoverERC20.call(uintFluIARW, {from: accounts[3]});

		assert.equal(uint256HdQGZft, BigInt("0"))
		assert.equal(uint256tUrhWF0, BigInt("0"))
		await expect(ReviveCEuRo5.recoverERC20.call(uintFluIARW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFD7BRmW = await Revive.new({from: accounts[2]});
		const uinttqCeM8Z = BigInt("232")
		const addressZ26OHHr = await ReviveFD7BRmW.owner.call({from: accounts[0]});
//		const uint256ygfbH7I = await ReviveFD7BRmW.recoverERC20.call(uinttqCeM8Z, {from: accounts[1]});

		assert.equal(addressZ26OHHr, 0xFDA03Af96dAb1Fc0fC45873D9e89C7EB8A22b011)
		await expect(ReviveFD7BRmW.recoverERC20.call(uinttqCeM8Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})