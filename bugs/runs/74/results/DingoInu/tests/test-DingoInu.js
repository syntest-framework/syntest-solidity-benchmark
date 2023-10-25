const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractjdnejGV = await DingoInu.new({from: accounts[1]});
		const tokensmaITEW6 = BigInt("1137")
		const toxb7OSMO = accounts[1]
		const fromREX8OYR = accounts[0]
		const tokens7r0ESh = BigInt("1879")
		const spenderlkWLUOn = accounts[3]
		const spenderApxCpm = accounts[0]
		const tokenOwnersYRQ7Ju = accounts[0]
		const tokensdjM6R2R = BigInt("69")
		const spenderkJIqzFn = accounts[1]
		const successMVOcK05 = await contractjdnejGV.transferFrom.call(fromREX8OYR, toxb7OSMO, tokensmaITEW6, {from: accounts[3]});
		const successLPxRw6z = await contractjdnejGV.approve.call(spenderlkWLUOn, tokens7r0ESh, {from: accounts[1]});
		const remainingeVQdTLA = await contractjdnejGV.allowance.call(tokenOwnersYRQ7Ju, spenderApxCpm, {from: accounts[3]});
		const nullAGFByve = await contractjdnejGV.totalSupply.call({from: accounts[4]});
		const successKJ5bBvy = await contractjdnejGV.approve.call(spenderkJIqzFn, tokensdjM6R2R, {from: accounts[3]});

		await expect(contractjdnejGV.transferFrom.call(fromREX8OYR, toxb7OSMO, tokensmaITEW6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contract4hMfei = await DingoInu.new({from: accounts[5]});
		const spendertGv1piI = accounts[4]
		const tokenOwnerfd5QKS = accounts[4]
		const tokenOwnerFREb3mM = accounts[3]
		const remainingLyJ8XiP = await contract4hMfei.allowance.call(tokenOwnerfd5QKS, spendertGv1piI, {from: accounts[1]});
		const balanceOwBp4Sa = await contract4hMfei.balanceOf.call(tokenOwnerFREb3mM, {from: accounts[0]});

		assert.equal(balanceOwBp4Sa, 0)
		assert.equal(remainingLyJ8XiP, 0)
	});

	it('test for DingoInu', async () => {
		const contractb6Ln3Lo = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensLp3HJ90 = BigInt("827")
		const spenderqvpKMGK = accounts[3]
		const tokensoDisSF = BigInt("1987")
		const toF1NZNWE = "0x0000000000000000000000000000000000000001"
		const tokenOwnerdoPgs8G = accounts[5]
		const tokensMxXcqpr = BigInt("1840")
		const toQ3GJ46I = accounts[3]
		const fromzvE2q6j = accounts[1]
		const tokenOwnerFynQF85 = accounts[1]
		const successZZaw5Py = await contractb6Ln3Lo.approve.call(spenderqvpKMGK, tokensLp3HJ90, {from: accounts[5]});
		const successqEZ0KQk = await contractb6Ln3Lo.transfer.call(toF1NZNWE, tokensoDisSF, {from: accounts[0]});
		const balanceuoOAVNH = await contractb6Ln3Lo.balanceOf.call(tokenOwnerdoPgs8G, {from: accounts[1]});
		const successUnRo0vO = await contractb6Ln3Lo.transferFrom.call(fromzvE2q6j, toQ3GJ46I, tokensMxXcqpr, {from: accounts[2]});
		const balancexT6rZQa = await contractb6Ln3Lo.balanceOf.call(tokenOwnerFynQF85, {from: accounts[0]});
	});

	it('test for DingoInu', async () => {
		const contractnaH4DFT = await DingoInu.new({from: accounts[2]});
		const spenderHoUi6yx = accounts[4]
		const tokenOwnert67poDm = accounts[0]
		const spenderaBuJnKh = "0x0000000000000000000000000000000000000001"
		const tokenOwnerv9mCZFU = accounts[0]
		const tokensBtgTJ5D = BigInt("426")
		const toDc27hH = "0x0000000000000000000000000000000000000001"
		const tokensgNa3g4f = BigInt("1808")
		const spenderMf4UiWO = accounts[0]
		const tokensLAsgBTS = BigInt("1000")
		const toI5dbg8 = accounts[2]
		const fromekGsHHA = accounts[3]
		const tokensSvlA08q = BigInt("848")
		const toq35fp9X = accounts[5]
		const remainingVKzSwcd = await contractnaH4DFT.allowance.call(tokenOwnert67poDm, spenderHoUi6yx, {from: accounts[1]});
		const remainingkru9p2Z = await contractnaH4DFT.allowance.call(tokenOwnerv9mCZFU, spenderaBuJnKh, {from: accounts[1]});
		const successlp6DSzd = await contractnaH4DFT.transfer.call(toDc27hH, tokensBtgTJ5D, {from: accounts[4]});
		const successoLuUYfO = await contractnaH4DFT.approve.call(spenderMf4UiWO, tokensgNa3g4f, {from: accounts[0]});
		const success2beJ8Y = await contractnaH4DFT.transferFrom.call(fromekGsHHA, toI5dbg8, tokensLAsgBTS, {from: accounts[2]});
		const successYy0Xq2b = await contractnaH4DFT.transfer.call(toq35fp9X, tokensSvlA08q, {from: accounts[1]});

		assert.equal(remainingVKzSwcd, 0)
		assert.equal(remainingkru9p2Z, 0)
		await expect(contractnaH4DFT.transfer.call(toDc27hH, tokensBtgTJ5D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractkjWHOVD = await DingoInu.new({from: accounts[1]});
		const tokensGURx6Av = BigInt("1376")
		const spenderfxOGcww = accounts[1]
		const tokenOwnerDkknf3p = accounts[3]
		const spenderq94XBzg = "0x0000000000000000000000000000000000000001"
		const tokenOwnert5NjwZN = accounts[2]
		const tokensm1ilNtf = BigInt("345")
		const toqxmLyUF = accounts[4]
		const successaXRjx1 = await contractkjWHOVD.approve.call(spenderfxOGcww, tokensGURx6Av, {from: accounts[2]});
		const balanceXc1X7d1 = await contractkjWHOVD.balanceOf.call(tokenOwnerDkknf3p, {from: accounts[2]});
		const nullCHYDD0 = await contractkjWHOVD.totalSupply.call({from: accounts[2]});
		const remaininggs05jmb = await contractkjWHOVD.allowance.call(tokenOwnert5NjwZN, spenderq94XBzg, {from: accounts[2]});
		const successAhnIq25 = await contractkjWHOVD.transfer.call(toqxmLyUF, tokensm1ilNtf, {from: accounts[1]});

		assert.equal(balanceXc1X7d1, 0)
		assert.equal(nullCHYDD0, 1000000000000000000000000000000)
		assert.equal(remaininggs05jmb, 0)
		assert.equal(successAhnIq25, true)
		assert.equal(successaXRjx1, true)
	});
})