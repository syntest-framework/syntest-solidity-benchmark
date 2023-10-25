const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractDHYRX1f = await DingoInu.new({from: accounts[0]});
		const tokensRHjGg4 = BigInt("765")
		const spenderSL1jSGT = accounts[3]
		const tokensLvlHEM7 = BigInt("428")
		const tobi8EmXu = accounts[5]
		const fromq6U2K3P = accounts[4]
		const tokensD46DmJT = BigInt("1949")
		const toKVdFho = accounts[1]
		const fromj53ddF = accounts[4]
		const tokenstX8mr3R = BigInt("189")
		const to7mCF7u = accounts[1]
		const tokenskopDxs = BigInt("1859")
		const tohqRTBTD = accounts[0]
		const successF5uYRZ = await contractDHYRX1f.approve.call(spenderSL1jSGT, tokensRHjGg4, {from: accounts[2]});
		const successP4EaEe6 = await contractDHYRX1f.transferFrom.call(fromq6U2K3P, tobi8EmXu, tokensLvlHEM7, {from: accounts[3]});
		const successx2gybiI = await contractDHYRX1f.transferFrom.call(fromj53ddF, toKVdFho, tokensD46DmJT, {from: accounts[2]});
		const successO0jWNsK = await contractDHYRX1f.transfer.call(to7mCF7u, tokenstX8mr3R, {from: accounts[1]});
		const successk1jXS6c = await contractDHYRX1f.transfer.call(tohqRTBTD, tokenskopDxs, {from: accounts[5]});

		assert.equal(successF5uYRZ, true)
		await expect(contractDHYRX1f.transferFrom.call(fromq6U2K3P, tobi8EmXu, tokensLvlHEM7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractfwvWN4Z = await DingoInu.new({from: accounts[1]});
		const tokenOwnerRiy455i = accounts[0]
		const tokensPAQEbbW = BigInt("1104")
		const towqtiCD6 = accounts[1]
		const spenderIVvI3Bw = "0x0000000000000000000000000000000000000001"
		const tokenOwnerTcD3tsP = accounts[0]
		const spenderCH0HBw = accounts[2]
		const tokenOwnerBpyzoOU = accounts[4]
		const balancevZC69vl = await contractfwvWN4Z.balanceOf.call(tokenOwnerRiy455i, {from: accounts[0]});
		const successHhFKYMu = await contractfwvWN4Z.transfer.call(towqtiCD6, tokensPAQEbbW, {from: accounts[2]});
		const nulltMHoMR = await contractfwvWN4Z.totalSupply.call({from: accounts[3]});
		const remaininggy2z0Kl = await contractfwvWN4Z.allowance.call(tokenOwnerTcD3tsP, spenderIVvI3Bw, {from: accounts[2]});
		const remainingvr0Me1O = await contractfwvWN4Z.allowance.call(tokenOwnerBpyzoOU, spenderCH0HBw, {from: accounts[2]});

		assert.equal(balancevZC69vl, 0)
		await expect(contractfwvWN4Z.transfer.call(towqtiCD6, tokensPAQEbbW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractXJfEJ84 = await DingoInu.new({from: accounts[1]});
		const tokensFbnPRUx = BigInt("1578")
		const spenderEq9s3H = accounts[1]
		const spendervTaBS3 = accounts[4]
		const tokenOwnerEicEVbp = accounts[3]
		const spenderuAmcBjy = accounts[4]
		const tokenOwnerc0NxDI4 = accounts[0]
		const successu92tWp1 = await contractXJfEJ84.approve.call(spenderEq9s3H, tokensFbnPRUx, {from: accounts[4]});
		const remainingsI0XXhP = await contractXJfEJ84.allowance.call(tokenOwnerEicEVbp, spendervTaBS3, {from: accounts[5]});
		const remainingWZ7dtP9 = await contractXJfEJ84.allowance.call(tokenOwnerc0NxDI4, spenderuAmcBjy, {from: accounts[1]});

		assert.equal(remainingWZ7dtP9, 0)
		assert.equal(remainingsI0XXhP, 0)
		assert.equal(successu92tWp1, true)
	});

	it('test for DingoInu', async () => {
		const contractzhlJpmT = await DingoInu.new({from: accounts[3]});
		const tokenOwnerFt53AN7 = accounts[0]
		const nullw7XOFtk = await contractzhlJpmT.totalSupply.call({from: accounts[4]});
		const nullvmOMbd = await contractzhlJpmT.totalSupply.call({from: accounts[0]});
		const balancemUONT8B = await contractzhlJpmT.balanceOf.call(tokenOwnerFt53AN7, {from: accounts[0]});

		assert.equal(balancemUONT8B, 0)
		assert.equal(nullvmOMbd, 1000000000000000000000000000000)
		assert.equal(nullw7XOFtk, 1000000000000000000000000000000)
	});

	it('test for DingoInu', async () => {
		const contractrLGy54N = await DingoInu.new({from: accounts[2]});
		const tokensQpxmEZQ = BigInt("771")
		const tox1tGGZW = accounts[0]
		const tokenshKxnnAc = BigInt("872")
		const toHyHkzNX = accounts[5]
		const fromIKmxIIB = "0x0000000000000000000000000000000000000001"
		const spenderBfWtLG9 = accounts[3]
		const tokenOwnerKPqB2iC = accounts[1]
		const successQe8DFJo = await contractrLGy54N.transfer.call(tox1tGGZW, tokensQpxmEZQ, {from: accounts[2]});
		const successieuVEfb = await contractrLGy54N.transferFrom.call(fromIKmxIIB, toHyHkzNX, tokenshKxnnAc, {from: accounts[2]});
		const remainingp1NVArR = await contractrLGy54N.allowance.call(tokenOwnerKPqB2iC, spenderBfWtLG9, {from: accounts[0]});

		assert.equal(successQe8DFJo, true)
		await expect(contractrLGy54N.transferFrom.call(fromIKmxIIB, toHyHkzNX, tokenshKxnnAc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractOLy1v7Q = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensrrhb4qI = BigInt("1234")
		const spenderQcsAxon = accounts[3]
		const tokensvsPzUby = BigInt("1991")
		const tofmWnFZW = accounts[3]
		const successXUkdIkd = await contractOLy1v7Q.approve.call(spenderQcsAxon, tokensrrhb4qI, {from: accounts[2]});
		const successXOYGeV = await contractOLy1v7Q.transfer.call(tofmWnFZW, tokensvsPzUby, {from: accounts[4]});
		const nullhq1wruh = await contractOLy1v7Q.totalSupply.call({from: accounts[3]});
	});
})