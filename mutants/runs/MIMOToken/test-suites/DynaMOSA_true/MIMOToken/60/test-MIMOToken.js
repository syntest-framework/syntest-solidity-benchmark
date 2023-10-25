const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokena23bV3 = await MIMOToken.new({from: accounts[1]});
		const addressRUhsWh = accounts[4]
		const addresshTPUBOo = accounts[0]
		const addresse1kFmR = accounts[1]
		const addresspyaA6b = accounts[4]
		const uintw2d0Cc = BigInt("1756")
		const addressPPvEuEC = accounts[2]
		const addressvLqMZvC = accounts[0]
		const uintNmIG9no = BigInt("537")
		const uintv7NSGeE = await MIMOTokena23bV3.allowance.call(addresshTPUBOo, addressRUhsWh, {from: accounts[3]});
		const uintH6sHnje = await MIMOTokena23bV3.allowance.call(addresspyaA6b, addresse1kFmR, {from: accounts[2]});
		const boolJfD8eFw = await MIMOTokena23bV3.transferFrom.call(addressvLqMZvC, addressPPvEuEC, uintw2d0Cc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rJh2lQM = await MIMOTokena23bV3.setFeeRate.call(uintNmIG9no, {from: accounts[3]});

		assert.equal(uintH6sHnje, BigInt("0"))
		assert.equal(uintv7NSGeE, BigInt("0"))
		await expect(MIMOTokena23bV3.transferFrom.call(addressvLqMZvC, addressPPvEuEC, uintw2d0Cc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenFLehHoZ = await MIMOToken.new({from: accounts[3]});
		const uintIVrz4Cy = BigInt("654")
		const addressPkUZHPv = accounts[3]
		const addressxSFXKjZ = accounts[1]
		const addressjnd6TxG = accounts[2]
		const uintSR6uz11 = BigInt("1916")
		const uintzKrivcu = BigInt("832")
		const uintmRDnUrA = BigInt("1532")
		const addresskd8wBW = accounts[2]
		const boollupBz2c = await MIMOTokenFLehHoZ.transfer.call(addressPkUZHPv, uintIVrz4Cy, {from: accounts[4]});
		const uintwkzbyG0 = await MIMOTokenFLehHoZ.allowance.call(addressjnd6TxG, addressxSFXKjZ, {from: accounts[1]});
		const uint256TU5RvPy = await MIMOTokenFLehHoZ.setFeeRate.call(uintSR6uz11, {from: accounts[3]});
		const uint256L3v2Z2I = await MIMOTokenFLehHoZ.setFeeRate.call(uintzKrivcu, {from: accounts[1]});
		const boolRw2BAL = await MIMOTokenFLehHoZ.transfer.call(addresskd8wBW, uintmRDnUrA, {from: accounts[2]});

		await expect(MIMOTokenFLehHoZ.transfer.call(addressPkUZHPv, uintIVrz4Cy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRyNdNHu = await MIMOToken.new({from: accounts[0]});
		const addressSFs38bH = accounts[3]
		const uintIc86Nd1 = BigInt("1192")
		const addressR45irqk = accounts[1]
		const uintzliuXJD = BigInt("1098")
		const addressOp3ux9T = accounts[0]
		const uintQfVOVR = await MIMOTokenRyNdNHu.balanceOf.call(addressSFs38bH, {from: accounts[1]});
		const uintmRpXHxd = await MIMOTokenRyNdNHu.totalSupply.call({from: accounts[1]});
		const uintOwtTSo = await MIMOTokenRyNdNHu.totalSupply.call({from: accounts[2]});
		const boolg6OjiWV = await MIMOTokenRyNdNHu.transfer.call(addressR45irqk, uintIc86Nd1, {from: accounts[2]});
		const boolvedzYHd = await MIMOTokenRyNdNHu.approve.call(addressOp3ux9T, uintzliuXJD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOwtTSo, BigInt("16000000000000000000000000"))
		assert.equal(uintQfVOVR, BigInt("0"))
		assert.equal(uintmRpXHxd, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenRyNdNHu.transfer.call(addressR45irqk, uintIc86Nd1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPawaln9 = await MIMOToken.new({from: accounts[1]});
		const uintlB6OthZ = BigInt("602")
		const uintryFuzx6 = BigInt("886")
		const addressA84pRj = "0x0000000000000000000000000000000000000001"
		const uintzEmZKuY = BigInt("1602")
		const addressGVBY2C9 = accounts[4]
		const uintFlqTFnW = BigInt("507")
		const addressJUZSHb6 = accounts[2]
		const uint256BOlxhg = await MIMOTokenPawaln9.getFee.call(uintlB6OthZ, {from: accounts[2]});
		const boolPgtV28A = await MIMOTokenPawaln9.transfer.call(addressA84pRj, uintryFuzx6, {from: accounts[3]});
		const boolGRPaUvd = await MIMOTokenPawaln9.approve.call(addressGVBY2C9, uintzEmZKuY, {from: accounts[4]});
		const boolRe7mQZW = await MIMOTokenPawaln9.approve.call(addressJUZSHb6, uintFlqTFnW, {from: accounts[4]});

		assert.equal(uint256BOlxhg, BigInt("50000000000000000"))
		await expect(MIMOTokenPawaln9.transfer.call(addressA84pRj, uintryFuzx6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokendU7touu = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSbRDpZ6 = accounts[2]
		const uintKcbK6n3 = BigInt("1349")
		const addressEVCA1Ms = accounts[1]
		const uinttIO1FKH = await MIMOTokendU7touu.balanceOf.call(addressSbRDpZ6, {from: accounts[0]});
		const uint256xBt9ROg = await MIMOTokendU7touu.getFee.call(uintKcbK6n3, {from: accounts[0]});
		const uintkaj08zK = await MIMOTokendU7touu.balanceOf.call(addressEVCA1Ms, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPawaln9 = await MIMOToken.new({from: accounts[1]});
		const uintbDphQRy = BigInt("1235")
		const uintJhppyyO = BigInt("1602")
		const addressePrUkW2 = accounts[4]
		const uinteutDQv = BigInt("507")
		const addressP1korBq = accounts[2]
		const uint256BOlxhg = await MIMOTokenPawaln9.getFee.call(uintbDphQRy, {from: accounts[2]});
		const boolGRPaUvd = await MIMOTokenPawaln9.approve.call(addressePrUkW2, uintJhppyyO, {from: accounts[4]});
		const boolRe7mQZW = await MIMOTokenPawaln9.approve.call(addressP1korBq, uinteutDQv, {from: accounts[4]});

		assert.equal(boolGRPaUvd, true)
		assert.equal(boolRe7mQZW, true)
		assert.equal(uint256BOlxhg, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPawaln9 = await MIMOToken.new({from: accounts[1]});
		const uintYrDnc5x = BigInt("612")
		const uintWE4Jtx = BigInt("602")
		const uintnj9cMNZ = BigInt("886")
		const addressE5MG6pn = "0x0000000000000000000000000000000000000001"
		const uintLaBElyp = BigInt("1602")
		const addressNu1Xry9 = accounts[5]
		const uinty2dI9hu = BigInt("507")
		const addressevNCYGP = accounts[2]
		const uint256sUJqLTv = await MIMOTokenPawaln9.setMinFee.call(uintYrDnc5x, {from: accounts[1]});
		const uint256BOlxhg = await MIMOTokenPawaln9.getFee.call(uintWE4Jtx, {from: accounts[2]});
		const boolPgtV28A = await MIMOTokenPawaln9.transfer.call(addressE5MG6pn, uintnj9cMNZ, {from: accounts[3]});
		const boolGRPaUvd = await MIMOTokenPawaln9.approve.call(addressNu1Xry9, uintLaBElyp, {from: accounts[4]});
		const boolRe7mQZW = await MIMOTokenPawaln9.approve.call(addressevNCYGP, uinty2dI9hu, {from: accounts[4]});

		assert.equal(uint256BOlxhg, BigInt("50000000000000000"))
		await expect(MIMOTokenPawaln9.transfer.call(addressE5MG6pn, uintnj9cMNZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokena23bV3 = await MIMOToken.new({from: accounts[1]});
		const uintrnBcxQ = BigInt("1324")
		const addressIBa7Fnc = accounts[5]
		const addressUcYm7hx = accounts[0]
		const addresspbSFVF = accounts[1]
		const addressHknqcte = accounts[4]
		const uintJWsMUGy = BigInt("1756")
		const address97J8vm = accounts[2]
		const addressxp8kdBo = accounts[0]
		const uint4d0c9W = BigInt("537")
		const uint256XZksaw4 = await MIMOTokena23bV3.setFeeRate.call(uintrnBcxQ, {from: accounts[2]});
		const uintv7NSGeE = await MIMOTokena23bV3.allowance.call(addressUcYm7hx, addressIBa7Fnc, {from: accounts[3]});
		const uintH6sHnje = await MIMOTokena23bV3.allowance.call(addressHknqcte, addresspbSFVF, {from: accounts[2]});
		const boolJfD8eFw = await MIMOTokena23bV3.transferFrom.call(addressxp8kdBo, address97J8vm, uintJWsMUGy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rJh2lQM = await MIMOTokena23bV3.setFeeRate.call(uint4d0c9W, {from: accounts[3]});

		assert.equal(uintH6sHnje, BigInt("0"))
		assert.equal(uintv7NSGeE, BigInt("0"))
		await expect(MIMOTokena23bV3.transferFrom.call(addressxp8kdBo, address97J8vm, uintJWsMUGy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPawaln9 = await MIMOToken.new({from: accounts[1]});
		const uintbZf33Zw = BigInt("602")
		const uintzcfPAqV = BigInt("886")
		const addresseKWJ2JQ = "0x0000000000000000000000000000000000000000"
		const uintTcloVf0 = BigInt("1602")
		const addressHhEyvMy = accounts[4]
		const addressBS21yTH = accounts[0]
		const uintAYuu6No = BigInt("371")
		const addressfNIq6KN = accounts[2]
		const addressJKxDiL8 = accounts[4]
		const uintWRV6K3P = BigInt("507")
		const addressaqx2zS = accounts[2]
		const uint256BOlxhg = await MIMOTokenPawaln9.getFee.call(uintbZf33Zw, {from: accounts[2]});
		const boolPgtV28A = await MIMOTokenPawaln9.transfer.call(addresseKWJ2JQ, uintzcfPAqV, {from: accounts[3]});
		const boolGRPaUvd = await MIMOTokenPawaln9.approve.call(addressHhEyvMy, uintTcloVf0, {from: accounts[4]});
		const uintWDqDJQz = await MIMOTokenPawaln9.balanceOf.call(addressBS21yTH, {from: accounts[2]});
		const boolzyXI92s = await MIMOTokenPawaln9.transferFrom.call(addressJKxDiL8, addressfNIq6KN, uintAYuu6No, {from: accounts[2]});
		const boolRe7mQZW = await MIMOTokenPawaln9.approve.call(addressaqx2zS, uintWRV6K3P, {from: accounts[4]});

		assert.equal(uint256BOlxhg, BigInt("50000000000000000"))
		await expect(MIMOTokenPawaln9.transfer.call(addresseKWJ2JQ, uintzcfPAqV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPawaln9 = await MIMOToken.new({from: accounts[1]});
		const addressrpS6jlY = accounts[0]
		const address3rlPTq = accounts[1]
		const uintvT6JYth = BigInt("569")
		const addressHDK0vQ9 = "0x0000000000000000000000000000000000000000"
		const uintLEw8kLx = BigInt("886")
		const addressr1EySz5 = "0x0000000000000000000000000000000000000001"
		const uintFvKj8sM = await MIMOTokenPawaln9.allowance.call(address3rlPTq, addressrpS6jlY, {from: accounts[5]});
		const boolXThxlbA = await MIMOTokenPawaln9.approve.call(addressHDK0vQ9, uintvT6JYth, {from: accounts[3]});
		const boolPgtV28A = await MIMOTokenPawaln9.transfer.call(addressr1EySz5, uintLEw8kLx, {from: accounts[3]});

		assert.equal(uintFvKj8sM, BigInt("0"))
		await expect(MIMOTokenPawaln9.approve.call(addressHDK0vQ9, uintvT6JYth, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})