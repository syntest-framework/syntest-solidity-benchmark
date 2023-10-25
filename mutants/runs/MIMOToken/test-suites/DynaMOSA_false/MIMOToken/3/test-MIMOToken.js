const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenDyQyXQm = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTNpOsk6 = BigInt("1362")
		const addressmMyjz8 = "0x0000000000000000000000000000000000000001"
		const addressR28Fndy = accounts[2]
		const uintYQBFbAj = BigInt("1540")
		const addressledjisU = accounts[2]
		const addressqcXXW8o = accounts[3]
		const uintUqY9V9j = BigInt("1742")
		const addresscVr4YC = "0x0000000000000000000000000000000000000001"
		const addresstUiL2rm = accounts[0]
		const addressGVa5hgc = accounts[3]
		const uintXa8Bvw6 = BigInt("490")
		const addressML8QSyJ = accounts[5]
		const bool3Zqnyl = await MIMOTokenDyQyXQm.transferFrom.call(addressR28Fndy, addressmMyjz8, uintTNpOsk6, {from: accounts[3]});
		const booluSgD1gW = await MIMOTokenDyQyXQm.transferFrom.call(addressqcXXW8o, addressledjisU, uintYQBFbAj, {from: accounts[4]});
		const booleifOSK = await MIMOTokenDyQyXQm.transfer.call(addresscVr4YC, uintUqY9V9j, {from: accounts[4]});
		const uintgE1uk5E = await MIMOTokenDyQyXQm.allowance.call(addressGVa5hgc, addresstUiL2rm, {from: accounts[5]});
		const boolomELpg0 = await MIMOTokenDyQyXQm.transfer.call(addressML8QSyJ, uintXa8Bvw6, {from: accounts[4]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenY2RkzYo = await MIMOToken.new({from: accounts[2]});
		const uintBAeFeDn = BigInt("1840")
		const addresswnNAleX = accounts[2]
		const addressvVI20jj = accounts[5]
		const uintsPoVIAf = BigInt("26")
		const addressvCbiCXC = accounts[2]
		const uintIZtvCDX = BigInt("1574")
		const addressQlg3ys = accounts[3]
		const addressogdRe9U = accounts[1]
		const uintqSHX98e = BigInt("1102")
		const addressFg4qlW9 = accounts[1]
		const boolL0xhCeq = await MIMOTokenY2RkzYo.transferFrom.call(addressvVI20jj, addresswnNAleX, uintBAeFeDn, {from: accounts[1]});
		const uintmp5T1N6 = await MIMOTokenY2RkzYo.totalSupply.call({from: accounts[3]});
		const uint256PSv2le = await MIMOTokenY2RkzYo.getFee.call(uintsPoVIAf, {from: accounts[3]});
		const uintiQ8KX5f = await MIMOTokenY2RkzYo.balanceOf.call(addressvCbiCXC, {from: accounts[0]});
		const booldyoptVx = await MIMOTokenY2RkzYo.transferFrom.call(addressogdRe9U, addressQlg3ys, uintIZtvCDX, {from: accounts[1]});
		const boolGvwu6H = await MIMOTokenY2RkzYo.transfer.call(addressFg4qlW9, uintqSHX98e, {from: accounts[4]});

		await expect(MIMOTokenY2RkzYo.transferFrom.call(addressvVI20jj, addresswnNAleX, uintBAeFeDn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJUSxmB = await MIMOToken.new({from: accounts[0]});
		const uintjXGifxU = BigInt("1220")
		const uintnfYHyu1 = BigInt("235")
		const addressaZHo3p4 = accounts[0]
		const addressrh9s384 = accounts[0]
		const uint256BD8lvOf = await MIMOTokenJUSxmB.setMinFee.call(uintjXGifxU, {from: "0x0000000000000000000000000000000000000001"});
		const uintboWDYs = await MIMOTokenJUSxmB.totalSupply.call({from: accounts[5]});
		const boolsDqS15u = await MIMOTokenJUSxmB.transferFrom.call(addressrh9s384, addressaZHo3p4, uintnfYHyu1, {from: accounts[2]});
		const uintfSKqp5r = await MIMOTokenJUSxmB.totalSupply.call({from: accounts[1]});

		assert.equal(uintboWDYs, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenJUSxmB.transferFrom.call(addressrh9s384, addressaZHo3p4, uintnfYHyu1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensUuYfjU = await MIMOToken.new({from: accounts[2]});
		const uintPgycfzW = BigInt("1468")
		const addressgdmEErS = accounts[3]
		const addressu1BfNQC = accounts[3]
		const uintBCINVfQ = BigInt("695")
		const addressopw1OC6 = accounts[0]
		const uinteoa6xuu = BigInt("558")
		const addressUdHHx7U = accounts[1]
		const uinthcOYXlh = BigInt("1970")
		const addressGMyVirq = accounts[4]
		const addressmJYey5F = accounts[0]
		const addresshwxQYEp = accounts[3]
		const boolbquEsU = await MIMOTokensUuYfjU.approve.call(addressgdmEErS, uintPgycfzW, {from: accounts[1]});
		const uintXdQcKPj = await MIMOTokensUuYfjU.balanceOf.call(addressu1BfNQC, {from: accounts[1]});
		const boolSlVjfFl = await MIMOTokensUuYfjU.approve.call(addressopw1OC6, uintBCINVfQ, {from: accounts[3]});
		const boolQdP9BNo = await MIMOTokensUuYfjU.transfer.call(addressUdHHx7U, uinteoa6xuu, {from: accounts[0]});
		const boolB2ViGaP = await MIMOTokensUuYfjU.transfer.call(addressGMyVirq, uinthcOYXlh, {from: accounts[2]});
		const uintzu2yiSG = await MIMOTokensUuYfjU.allowance.call(addresshwxQYEp, addressmJYey5F, {from: accounts[2]});

		assert.equal(boolSlVjfFl, true)
		assert.equal(boolbquEsU, true)
		assert.equal(uintXdQcKPj, BigInt("0"))
		await expect(MIMOTokensUuYfjU.transfer.call(addressUdHHx7U, uinteoa6xuu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenY2RkzYo = await MIMOToken.new({from: accounts[2]});
		const uintZr8Buly = BigInt("1716")
		const uintLiAs4jL = BigInt("1840")
		const addressaWectPd = accounts[2]
		const addressT7GwU0n = accounts[5]
		const uintZ1KKWbc = BigInt("26")
		const addresshUnuDHF = accounts[3]
		const uintTUPkVjJ = BigInt("1574")
		const addressXVXYjot = accounts[3]
		const addressxA1RVaF = accounts[1]
		const uintdqzvkMv = BigInt("1765")
		const addressINuA55r = "0x0000000000000000000000000000000000000001"
		const addressGfAuK2 = "0x0000000000000000000000000000000000000001"
		const uintgnJ8l8N = BigInt("1102")
		const addressOydny4k = accounts[1]
		const uint256YYMQYSj = await MIMOTokenY2RkzYo.getFee.call(uintZr8Buly, {from: accounts[2]});
		const boolL0xhCeq = await MIMOTokenY2RkzYo.transferFrom.call(addressT7GwU0n, addressaWectPd, uintLiAs4jL, {from: accounts[1]});
		const uintmp5T1N6 = await MIMOTokenY2RkzYo.totalSupply.call({from: accounts[3]});
		const uint256PSv2le = await MIMOTokenY2RkzYo.getFee.call(uintZ1KKWbc, {from: accounts[3]});
		const uintEE83ia = await MIMOTokenY2RkzYo.totalSupply.call({from: accounts[1]});
		const uintiQ8KX5f = await MIMOTokenY2RkzYo.balanceOf.call(addresshUnuDHF, {from: accounts[0]});
		const booldyoptVx = await MIMOTokenY2RkzYo.transferFrom.call(addressxA1RVaF, addressXVXYjot, uintTUPkVjJ, {from: accounts[1]});
		const boolEUq5NoN = await MIMOTokenY2RkzYo.transferFrom.call(addressGfAuK2, addressINuA55r, uintdqzvkMv, {from: accounts[2]});
		const boolGvwu6H = await MIMOTokenY2RkzYo.transfer.call(addressOydny4k, uintgnJ8l8N, {from: accounts[4]});

		assert.equal(uint256YYMQYSj, BigInt("50000000000000000"))
		await expect(MIMOTokenY2RkzYo.transferFrom.call(addressT7GwU0n, addressaWectPd, uintLiAs4jL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensUuYfjU = await MIMOToken.new({from: accounts[2]});
		const uintAjmKmY = BigInt("1468")
		const addressLdOr1cq = accounts[3]
		const addressNyOcO9j = accounts[3]
		const addressVxavrs0 = accounts[2]
		const addressETPZIGp = accounts[4]
		const uint7jYF5p = BigInt("695")
		const addressHVxBpGj = accounts[0]
		const uintHAt80KB = BigInt("558")
		const addressQbxDIqz = accounts[1]
		const uintFt44Klh = BigInt("1970")
		const addressnlxKzxt = accounts[4]
		const addresspuizdbX = accounts[1]
		const addressUIqnm6W = accounts[3]
		const boolbquEsU = await MIMOTokensUuYfjU.approve.call(addressLdOr1cq, uintAjmKmY, {from: accounts[1]});
		const uintXdQcKPj = await MIMOTokensUuYfjU.balanceOf.call(addressNyOcO9j, {from: accounts[1]});
		const uintsk2usHH = await MIMOTokensUuYfjU.totalSupply.call({from: accounts[1]});
		const uintx8CXero = await MIMOTokensUuYfjU.allowance.call(addressETPZIGp, addressVxavrs0, {from: accounts[3]});
		const boolSlVjfFl = await MIMOTokensUuYfjU.approve.call(addressHVxBpGj, uint7jYF5p, {from: accounts[3]});
		const boolQdP9BNo = await MIMOTokensUuYfjU.transfer.call(addressQbxDIqz, uintHAt80KB, {from: accounts[0]});
		const boolB2ViGaP = await MIMOTokensUuYfjU.transfer.call(addressnlxKzxt, uintFt44Klh, {from: accounts[2]});
		const uintzu2yiSG = await MIMOTokensUuYfjU.allowance.call(addressUIqnm6W, addresspuizdbX, {from: accounts[2]});

		assert.equal(boolSlVjfFl, true)
		assert.equal(boolbquEsU, true)
		assert.equal(uintXdQcKPj, BigInt("0"))
		assert.equal(uintsk2usHH, BigInt("16000000000000000000000000"))
		assert.equal(uintx8CXero, BigInt("0"))
		await expect(MIMOTokensUuYfjU.transfer.call(addressQbxDIqz, uintHAt80KB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJUSxmB = await MIMOToken.new({from: accounts[0]});
		const uintnf8l4UZ = BigInt("841")
		const uintNaWSy71 = BigInt("1220")
		const uintrUXxFSQ = BigInt("405")
		const uintjczxoi = BigInt("235")
		const addressDcfwunU = accounts[0]
		const addressgjy0kdQ = accounts[0]
		const uint256NeDYTK6 = await MIMOTokenJUSxmB.setMinFee.call(uintnf8l4UZ, {from: accounts[1]});
		const uint256BD8lvOf = await MIMOTokenJUSxmB.setMinFee.call(uintNaWSy71, {from: "0x0000000000000000000000000000000000000001"});
		const uintboWDYs = await MIMOTokenJUSxmB.totalSupply.call({from: accounts[5]});
		const uint2568vpLrb = await MIMOTokenJUSxmB.setFeeRate.call(uintrUXxFSQ, {from: accounts[1]});
		const boolsDqS15u = await MIMOTokenJUSxmB.transferFrom.call(addressgjy0kdQ, addressDcfwunU, uintjczxoi, {from: accounts[2]});
		const uintfSKqp5r = await MIMOTokenJUSxmB.totalSupply.call({from: accounts[1]});

		assert.equal(uintboWDYs, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenJUSxmB.transferFrom.call(addressgjy0kdQ, addressDcfwunU, uintjczxoi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})