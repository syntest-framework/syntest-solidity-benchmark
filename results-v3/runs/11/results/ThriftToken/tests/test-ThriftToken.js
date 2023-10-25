const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenrvSWd5 = await ThriftToken.new({from: accounts[0]});
		const uinte3oRkwU = BigInt("1465")
		const addressY4x40eQ = accounts[1]
		const uintEMELe3o = BigInt("1329")
		const addressW00Jnv4 = accounts[1]
		const uintVIeVdV8 = BigInt("1545")
		const addressvlSRSEO = accounts[0]
		const uinta0RYlKM = BigInt("922")
		const addressrC2k3YX = accounts[1]
		const uintGZDoHpN = BigInt("1237")
		const addressI6Vwo9K = accounts[1]
		const boolqkWzjGr = await ThriftTokenrvSWd5.increaseApproval.call(addressY4x40eQ, uinte3oRkwU, {from: accounts[4]});
		const boolzpGIuKO = await ThriftTokenrvSWd5.transfer.call(addressW00Jnv4, uintEMELe3o, {from: accounts[0]});
		const boolwSh27B = await ThriftTokenrvSWd5.increaseApproval.call(addressvlSRSEO, uintVIeVdV8, {from: accounts[3]});
		const boolK71NW5k = await ThriftTokenrvSWd5.decreaseApproval.call(addressrC2k3YX, uinta0RYlKM, {from: accounts[3]});
		const booluf6wdKe = await ThriftTokenrvSWd5.decreaseApproval.call(addressI6Vwo9K, uintGZDoHpN, {from: accounts[0]});

		assert.equal(boolqkWzjGr, true)
		await expect(ThriftTokenrvSWd5.transfer.call(addressW00Jnv4, uintEMELe3o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkqnDFfi = await ThriftToken.new({from: accounts[2]});
		const uintA2MmZyg = BigInt("483")
		const addressFM61xgV = accounts[1]
		const uintEPeSgzF = BigInt("776")
		const addressjGQKSF = accounts[4]
		const uintDF8oCS7 = BigInt("573")
		const addressdT4KVvp = "0x0000000000000000000000000000000000000001"
		const addressLJurqCG = accounts[3]
		const addressrZDAG7b = accounts[1]
		const boolBzop4UQ = await ThriftTokenkqnDFfi.approve.call(addressFM61xgV, uintA2MmZyg, {from: accounts[5]});
		const booluKhjUi7 = await ThriftTokenkqnDFfi.transfer.call(addressjGQKSF, uintEPeSgzF, {from: accounts[2]});
		const bool62yaEY = await ThriftTokenkqnDFfi.increaseApproval.call(addressdT4KVvp, uintDF8oCS7, {from: accounts[4]});
		const addressZNnBBhP = await ThriftTokenkqnDFfi.transferOwnership.call(addressLJurqCG, {from: accounts[2]});
		const uint256XhLBIcJ = await ThriftTokenkqnDFfi.balanceOf.call(addressrZDAG7b, {from: accounts[0]});

		assert.equal(boolBzop4UQ, true)
		await expect(ThriftTokenkqnDFfi.transfer.call(addressjGQKSF, uintEPeSgzF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenATf2gq1 = await ThriftToken.new({from: accounts[2]});
		const uintRb7QMFS = BigInt("9")
		const addressNFC4iSU = accounts[1]
		const addressqkA5IIk = accounts[1]
		const uintqHWeXHY = BigInt("1296")
		const addressYq0RB51 = accounts[2]
		const uintvBoxd6 = BigInt("518")
		const addressqWBAaaH = accounts[2]
		const uintay3jMbu = BigInt("645")
		const addressgl8CUD = accounts[2]
		const boolcf6C15 = await ThriftTokenATf2gq1.transferFrom.call(addressqkA5IIk, addressNFC4iSU, uintRb7QMFS, {from: accounts[0]});
		const boolMDWJZrJ = await ThriftTokenATf2gq1.transfer.call(addressYq0RB51, uintqHWeXHY, {from: "0x0000000000000000000000000000000000000001"});
		const boolJQ7H4W6 = await ThriftTokenATf2gq1.decreaseApproval.call(addressqWBAaaH, uintvBoxd6, {from: accounts[0]});
		const boolhc1V2lO = await ThriftTokenATf2gq1.transfer.call(addressgl8CUD, uintay3jMbu, {from: accounts[2]});

		await expect(ThriftTokenATf2gq1.transferFrom.call(addressqkA5IIk, addressNFC4iSU, uintRb7QMFS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenol92t65 = await ThriftToken.new({from: accounts[4]});
		const uintpZuCWPs = BigInt("2023")
		const addressgCaZ7Gr = accounts[0]
		const addressQQ2b0Z8 = accounts[4]
		const addressHkNH7Nx = "0x0000000000000000000000000000000000000001"
		const boolVUy8hJM = await ThriftTokenol92t65.increaseApproval.call(addressgCaZ7Gr, uintpZuCWPs, {from: accounts[3]});
		const addressna30nzh = await ThriftTokenol92t65.transferOwnership.call(addressQQ2b0Z8, {from: accounts[0]});
		const uint256hMr6nOG = await ThriftTokenol92t65.balanceOf.call(addressHkNH7Nx, {from: accounts[1]});

		assert.equal(boolVUy8hJM, true)
		await expect(ThriftTokenol92t65.transferOwnership.call(addressQQ2b0Z8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjK3K8Ft = await ThriftToken.new({from: accounts[4]});
		const addressAEvC5ey = accounts[5]
		const uintMMFzh96 = BigInt("577")
		const addresszGHR0bR = accounts[5]
		const uintCAPngZG = BigInt("1376")
		const addressH9NdBd = "0x0000000000000000000000000000000000000001"
		const addressTfxtmsa = accounts[0]
		const addressbw9bveF = accounts[3]
		const uint256CUD3c5n = await ThriftTokenjK3K8Ft.balanceOf.call(addressAEvC5ey, {from: accounts[1]});
		const boolxLfEBRB = await ThriftTokenjK3K8Ft.transfer.call(addresszGHR0bR, uintMMFzh96, {from: accounts[0]});
		const boolr6Y0pAM = await ThriftTokenjK3K8Ft.increaseApproval.call(addressH9NdBd, uintCAPngZG, {from: accounts[4]});
		const uint256JgOHr7z = await ThriftTokenjK3K8Ft.balanceOf.call(addressTfxtmsa, {from: accounts[1]});
		const uint256nRBKgUd = await ThriftTokenjK3K8Ft.balanceOf.call(addressbw9bveF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CUD3c5n, BigInt("0"))
		await expect(ThriftTokenjK3K8Ft.transfer.call(addresszGHR0bR, uintMMFzh96, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenAoc3lg0 = await ThriftToken.new({from: accounts[3]});
		const uintRFQGKXo = BigInt("1583")
		const addresspCEQ9I6 = accounts[4]
		const addressyfy01DE = "0x0000000000000000000000000000000000000001"
		const uintfMAVLI = BigInt("1909")
		const addressOPI9fyI = accounts[0]
		const uintrrocp6x = BigInt("653")
		const addressEQZEpoK = accounts[4]
		const uintZnaLdFN = BigInt("696")
		const addressFpeitv6 = accounts[3]
		const uintBY6mMwm = BigInt("387")
		const addressjk4UTkR = accounts[0]
		const addressG3NlL2C = accounts[2]
		const addressXrmEAh = accounts[4]
		const boolAHI4Qn = await ThriftTokenAoc3lg0.transferFrom.call(addressyfy01DE, addresspCEQ9I6, uintRFQGKXo, {from: accounts[5]});
		const boolTRHfmlW = await ThriftTokenAoc3lg0.increaseApproval.call(addressOPI9fyI, uintfMAVLI, {from: accounts[3]});
		const boolVmX8jVF = await ThriftTokenAoc3lg0.decreaseApproval.call(addressEQZEpoK, uintrrocp6x, {from: accounts[1]});
		const boole32fO25 = await ThriftTokenAoc3lg0.transfer.call(addressFpeitv6, uintZnaLdFN, {from: accounts[3]});
		const boolOxdzP5f = await ThriftTokenAoc3lg0.transferFrom.call(addressG3NlL2C, addressjk4UTkR, uintBY6mMwm, {from: accounts[4]});
		const addressee554Z0 = await ThriftTokenAoc3lg0.transferOwnership.call(addressXrmEAh, {from: accounts[1]});

		await expect(ThriftTokenAoc3lg0.transferFrom.call(addressyfy01DE, addresspCEQ9I6, uintRFQGKXo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLaJeAy = await ThriftToken.new({from: accounts[4]});
		const addressmi65g7o = "0x0000000000000000000000000000000000000001"
		const addressT4R51TN = accounts[3]
		const addressn2BLjop = accounts[0]
		const uintkLzew4r = BigInt("1831")
		const addresse6FPrP = accounts[1]
		const addressBbcOugQ = accounts[2]
		const addressJJR1Dw = accounts[0]
		const uinteXJS7g = BigInt("295")
		const addressYiKwx8i = accounts[0]
		const addressFzrrmzy = accounts[4]
		const addressaxB6WmR = accounts[1]
		const addressSfQHWHU = accounts[0]
		const uint256zW3TJgq = await ThriftTokenLaJeAy.allowance.call(addressT4R51TN, addressmi65g7o, {from: accounts[0]});
		const addressOakIF2r = await ThriftTokenLaJeAy.transferOwnership.call(addressn2BLjop, {from: accounts[2]});
		const boolIukd8P = await ThriftTokenLaJeAy.transferFrom.call(addressBbcOugQ, addresse6FPrP, uintkLzew4r, {from: accounts[3]});
		const uint256GxPQ5Pj = await ThriftTokenLaJeAy.balanceOf.call(addressJJR1Dw, {from: accounts[4]});
		const boolafELjMd = await ThriftTokenLaJeAy.transferFrom.call(addressFzrrmzy, addressYiKwx8i, uinteXJS7g, {from: accounts[4]});
		const uint256s1P9NB = await ThriftTokenLaJeAy.allowance.call(addressSfQHWHU, addressaxB6WmR, {from: accounts[2]});

		assert.equal(uint256zW3TJgq, BigInt("0"))
		await expect(ThriftTokenLaJeAy.transferOwnership.call(addressn2BLjop, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenrvSWd5 = await ThriftToken.new({from: accounts[0]});
		const uintnTCMHbh = BigInt("1465")
		const addressJIqfTG3 = accounts[1]
		const uintfjjapFY = BigInt("1545")
		const addressuqGoFV = accounts[0]
		const uintvVRJhp6 = BigInt("922")
		const addressozqyLFo = accounts[1]
		const uintagFSJl = BigInt("1237")
		const addressbhik96m = accounts[1]
		const boolqkWzjGr = await ThriftTokenrvSWd5.increaseApproval.call(addressJIqfTG3, uintnTCMHbh, {from: accounts[4]});
		const boolwSh27B = await ThriftTokenrvSWd5.increaseApproval.call(addressuqGoFV, uintfjjapFY, {from: accounts[3]});
		const boolK71NW5k = await ThriftTokenrvSWd5.decreaseApproval.call(addressozqyLFo, uintvVRJhp6, {from: accounts[3]});
		const booluf6wdKe = await ThriftTokenrvSWd5.decreaseApproval.call(addressbhik96m, uintagFSJl, {from: accounts[0]});

		assert.equal(boolK71NW5k, true)
		assert.equal(boolqkWzjGr, true)
		assert.equal(booluf6wdKe, true)
		assert.equal(boolwSh27B, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenxepAGdH = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIKHd5TX = BigInt("718")
		const addressxINbikZ = accounts[1]
		const uintRNO1l4h = BigInt("176")
		const addresspw81uN = "0x0000000000000000000000000000000000000001"
		const uintEICKgfu = BigInt("41")
		const addressdjObFO9 = accounts[3]
		const addresslXtlw6P = accounts[2]
		const uintBRBhJMW = BigInt("610")
		const addresszgW3dvN = accounts[2]
		const addresskx2M4Fe = accounts[4]
		const boolqQSF2XV = await ThriftTokenxepAGdH.approve.call(addressxINbikZ, uintIKHd5TX, {from: accounts[2]});
		const boolj1Hx6W = await ThriftTokenxepAGdH.decreaseApproval.call(addresspw81uN, uintRNO1l4h, {from: accounts[0]});
		const boolrdBXpcu = await ThriftTokenxepAGdH.decreaseApproval.call(addressdjObFO9, uintEICKgfu, {from: accounts[3]});
		const uint256iy89uEq = await ThriftTokenxepAGdH.transferableTokens.call(addresslXtlw6P, {from: accounts[0]});
		const boolqnSbVbm = await ThriftTokenxepAGdH.transferFrom.call(addresskx2M4Fe, addresszgW3dvN, uintBRBhJMW, {from: accounts[3]});
	});
})