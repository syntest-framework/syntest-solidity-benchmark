const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenefyaZXv = await MIMOToken.new({from: accounts[4]});
		const addressEoFfw6s = accounts[1]
		const uintTATun6 = await MIMOTokenefyaZXv.balanceOf.call(addressEoFfw6s, {from: accounts[0]});
		const uintw22WDvT = await MIMOTokenefyaZXv.totalSupply.call({from: accounts[5]});

		assert.equal(uintTATun6, BigInt("0"))
		assert.equal(uintw22WDvT, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOToken39wVF2 = await MIMOToken.new({from: accounts[0]});
		const addressjQyXcFG = accounts[0]
		const uintYN011bA = BigInt("1431")
		const addressBjOvFmq = accounts[4]
		const addressl9WDWzS = accounts[0]
		const uintec8gfza = await MIMOToken39wVF2.balanceOf.call(addressjQyXcFG, {from: accounts[5]});
//		const boolmBkeFsg = await MIMOToken39wVF2.transferFrom.call(addressl9WDWzS, addressBjOvFmq, uintYN011bA, {from: accounts[4]});

		assert.equal(uintec8gfza, BigInt("0"))
		await expect(MIMOToken39wVF2.transferFrom.call(addressl9WDWzS, addressBjOvFmq, uintYN011bA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenHNwwvdP = await MIMOToken.new({from: accounts[0]});
		const uintslAQWnD = BigInt("1297")
		const uintbdVZa8v = BigInt("657")
		const uintsRKrxR = BigInt("1558")
		const addressqHErROO = accounts[2]
		const addressRKP7bdd = accounts[4]
		const uintf2WsjYN = BigInt("1775")
		const uint256JfS7Jn = await MIMOTokenHNwwvdP.setFeeRate.call(uintslAQWnD, {from: accounts[3]});
		const uint256YDTLDE = await MIMOTokenHNwwvdP.setFeeRate.call(uintbdVZa8v, {from: accounts[3]});
//		const boolC5ixAxz = await MIMOTokenHNwwvdP.transferFrom.call(addressRKP7bdd, addressqHErROO, uintsRKrxR, {from: accounts[4]});
//		const uint256rDnduQa = await MIMOTokenHNwwvdP.setMinFee.call(uintf2WsjYN, {from: accounts[2]});

		await expect(MIMOTokenHNwwvdP.transferFrom.call(addressRKP7bdd, addressqHErROO, uintsRKrxR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenfndHLpS = await MIMOToken.new({from: accounts[4]});
		const uintZezM18 = BigInt("666")
		const uintjnxfYC0 = BigInt("832")
		const uint0cjnFK = BigInt("868")
		const uintp2kJUXq = BigInt("101")
		const uintUTfxift = BigInt("948")
		const addressi90ZoQ = "0x0000000000000000000000000000000000000001"
		const uint256IMxkhF7 = await MIMOTokenfndHLpS.setFeeRate.call(uintZezM18, {from: accounts[3]});
		const uint256thRYiFK = await MIMOTokenfndHLpS.setFeeRate.call(uintjnxfYC0, {from: accounts[0]});
		const uint256wxgbSt6 = await MIMOTokenfndHLpS.setFeeRate.call(uint0cjnFK, {from: accounts[2]});
		const uint256uIkjqoF = await MIMOTokenfndHLpS.setFeeRate.call(uintp2kJUXq, {from: accounts[1]});
		const boolLAupAo1 = await MIMOTokenfndHLpS.approve.call(addressi90ZoQ, uintUTfxift, {from: accounts[3]});

		assert.equal(boolLAupAo1, true)
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenrEvpBM = await MIMOToken.new({from: accounts[4]});
		const addressNI93pZD = accounts[5]
		const addressrFofhfq = accounts[1]
		const uintrylEvQO = BigInt("1630")
		const addressWexEesC = accounts[1]
		const addressP7pGweh = "0x0000000000000000000000000000000000000001"
		const uintLD8gQE = await MIMOTokenrEvpBM.allowance.call(addressrFofhfq, addressNI93pZD, {from: accounts[1]});
		const uintFCYa4y = await MIMOTokenrEvpBM.totalSupply.call({from: accounts[1]});
//		const boolOE4zKgn = await MIMOTokenrEvpBM.transferFrom.call(addressP7pGweh, addressWexEesC, uintrylEvQO, {from: accounts[5]});

		assert.equal(uintFCYa4y, BigInt("16000000000000000000000000"))
		assert.equal(uintLD8gQE, BigInt("0"))
		await expect(MIMOTokenrEvpBM.transferFrom.call(addressP7pGweh, addressWexEesC, uintrylEvQO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenYUSqAlD = await MIMOToken.new({from: accounts[3]});
		const uintbKvKV5V = BigInt("1127")
		const addressZrmKfRl = accounts[2]
		const uintqvVM7Tx = await MIMOTokenYUSqAlD.totalSupply.call({from: accounts[4]});
		const uintsb1LAti = await MIMOTokenYUSqAlD.totalSupply.call({from: accounts[2]});
//		const boolr5qvnZk = await MIMOTokenYUSqAlD.transfer.call(addressZrmKfRl, uintbKvKV5V, {from: accounts[3]});

		assert.equal(uintqvVM7Tx, BigInt("16000000000000000000000000"))
		assert.equal(uintsb1LAti, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenYUSqAlD.transfer.call(addressZrmKfRl, uintbKvKV5V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbfd8Qs = await MIMOToken.new({from: accounts[5]});
		const addressiXRDVq = accounts[2]
		const addressOxjuvy6 = accounts[5]
		const uintv0UVwrb = BigInt("1423")
		const address04KuUc = accounts[0]
		const uinthTZfnS = BigInt("2004")
		const addressEgmvUr = accounts[1]
		const addressSt6L8M = "0x0000000000000000000000000000000000000001"
		const uintE11mv2M = await MIMOTokenbfd8Qs.allowance.call(addressOxjuvy6, addressiXRDVq, {from: accounts[2]});
		const uint256sv2O134 = await MIMOTokenbfd8Qs.getFee.call(uintv0UVwrb, {from: accounts[1]});
		const uintU2WuIAf = await MIMOTokenbfd8Qs.balanceOf.call(address04KuUc, {from: accounts[5]});
//		const boolqWiTzk5 = await MIMOTokenbfd8Qs.transferFrom.call(addressSt6L8M, addressEgmvUr, uinthTZfnS, {from: accounts[4]});

		assert.equal(uint256sv2O134, BigInt("50000000000000000"))
		assert.equal(uintE11mv2M, BigInt("0"))
		assert.equal(uintU2WuIAf, BigInt("0"))
		await expect(MIMOTokenbfd8Qs.transferFrom.call(addressSt6L8M, addressEgmvUr, uinthTZfnS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOToken39wVF2 = await MIMOToken.new({from: accounts[0]});
		const addressQjcmLzJ = accounts[4]
		const addressTPUDQvJ = accounts[0]
		const uintUHMo6xx = BigInt("1215")
		const uintAnMK60 = BigInt("1420")
		const addressAgsTPJy = accounts[4]
		const addressrdhJpZ5 = accounts[0]
		const uintFXljuWi = await MIMOToken39wVF2.balanceOf.call(addressQjcmLzJ, {from: accounts[0]});
		const uintec8gfza = await MIMOToken39wVF2.balanceOf.call(addressTPUDQvJ, {from: accounts[5]});
		const uint256XfO03Gl = await MIMOToken39wVF2.setMinFee.call(uintUHMo6xx, {from: accounts[3]});
//		const boolmBkeFsg = await MIMOToken39wVF2.transferFrom.call(addressrdhJpZ5, addressAgsTPJy, uintAnMK60, {from: accounts[4]});

		assert.equal(uintFXljuWi, BigInt("0"))
		assert.equal(uintec8gfza, BigInt("0"))
		await expect(MIMOToken39wVF2.transferFrom.call(addressrdhJpZ5, addressAgsTPJy, uintAnMK60, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenlRsRGtr = await MIMOToken.new({from: accounts[0]});
		const uintCC8iLsL = BigInt("493")
		const addressiO88BH4 = "0x0000000000000000000000000000000000000000"
//		const boolZTcZriw = await MIMOTokenlRsRGtr.transfer.call(addressiO88BH4, uintCC8iLsL, {from: accounts[3]});
//		const uintpy9WHRY = await MIMOTokenlRsRGtr.totalSupply.call({from: accounts[1]});
//		const uintgJZm9cA = await MIMOTokenlRsRGtr.totalSupply.call({from: accounts[4]});

		await expect(MIMOTokenlRsRGtr.transfer.call(addressiO88BH4, uintCC8iLsL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenAFz1PJN = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCjwQICw = accounts[2]
		const addressfL4qsvN = accounts[2]
		const addresszeL2nOL = accounts[3]
		const addresscBnhyMX = accounts[0]
		const uintF6P9jC = BigInt("1007")
		const addressXVhNMjL = accounts[4]
		const addressJrPi6KP = accounts[4]
		const addressH3erLFX = accounts[4]
		const uintzhp8mqK = await MIMOTokenAFz1PJN.allowance.call(addressfL4qsvN, addressCjwQICw, {from: accounts[3]});
		const uintKoeoC30 = await MIMOTokenAFz1PJN.allowance.call(addresscBnhyMX, addresszeL2nOL, {from: accounts[4]});
		const boolmJxVCXF = await MIMOTokenAFz1PJN.approve.call(addressXVhNMjL, uintF6P9jC, {from: accounts[2]});
		const uintpi2EROL = await MIMOTokenAFz1PJN.balanceOf.call(addressJrPi6KP, {from: accounts[1]});
		const uintJOhhvbO = await MIMOTokenAFz1PJN.balanceOf.call(addressH3erLFX, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenlRsRGtr = await MIMOToken.new({from: accounts[0]});
		const uintIWyvb8o = BigInt("1167")
		const addressQjxwFgL = "0x0000000000000000000000000000000000000000"
		const addressvOD3xXh = accounts[2]
		const addressrI4GDFV = accounts[2]
		const uintFYh02bP = BigInt("493")
		const addressJe3zAMx = "0x0000000000000000000000000000000000000001"
//		const boolfdtRl5e = await MIMOTokenlRsRGtr.approve.call(addressQjxwFgL, uintIWyvb8o, {from: accounts[2]});
//		const uintHb5wruM = await MIMOTokenlRsRGtr.allowance.call(addressrI4GDFV, addressvOD3xXh, {from: accounts[4]});
//		const boolZTcZriw = await MIMOTokenlRsRGtr.transfer.call(addressJe3zAMx, uintFYh02bP, {from: accounts[3]});

		await expect(MIMOTokenlRsRGtr.approve.call(addressQjxwFgL, uintIWyvb8o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})