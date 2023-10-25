const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractgEuZdH3 = await ERC20.new({from: accounts[0]});
		const addedValuekawyvg8 = BigInt("1656")
		const spenderkRloYIE = accounts[3]
		const addedValueF7UCUWc = BigInt("2004")
		const spenderPTq1Dq9 = "0x0000000000000000000000000000000000000001"
		const addedValuepOXdW3i = BigInt("394")
		const spenderO3cVWsD = accounts[4]
		const nullrxbkpsv = await contractgEuZdH3.increaseAllowance.call(spenderkRloYIE, addedValuekawyvg8, {from: accounts[3]});
		const nulllLLOQXG = await contractgEuZdH3.increaseAllowance.call(spenderPTq1Dq9, addedValueF7UCUWc, {from: accounts[2]});
		const nullkPLpzZ6 = await contractgEuZdH3.increaseAllowance.call(spenderO3cVWsD, addedValuepOXdW3i, {from: accounts[3]});

		assert.equal(nullkPLpzZ6, true)
		assert.equal(nulllLLOQXG, true)
		assert.equal(nullrxbkpsv, true)
	});

	it('test for ERC20', async () => {
		const contractvNxmkYF = await ERC20.new({from: accounts[1]});
		const ownerhcZtv51 = accounts[2]
		const addedValueO9h9okR = BigInt("1325")
		const spenderNboLHAh = accounts[3]
		const nullGfcn7mw = await contractvNxmkYF.balanceOf.call(ownerhcZtv51, {from: accounts[5]});
		const nullVbupoPc = await contractvNxmkYF.increaseAllowance.call(spenderNboLHAh, addedValueO9h9okR, {from: accounts[1]});
		const nullzHTBlff = await contractvNxmkYF.totalSupply.call({from: accounts[4]});
		const nullLZRyUNS = await contractvNxmkYF.totalSupply.call({from: accounts[4]});

		assert.equal(nullGfcn7mw, 0)
		assert.equal(nullLZRyUNS, 0)
		assert.equal(nullVbupoPc, true)
		assert.equal(nullzHTBlff, 0)
	});

	it('test for ERC20', async () => {
		const contractFOzjGe8 = await ERC20.new({from: accounts[1]});
		const spender8xWRng = accounts[4]
		const ownerCnXPUuH = accounts[4]
		const valuegX62oMH = BigInt("833")
		const toSW1h0BJ = accounts[3]
		const fromjyZKsmH = accounts[0]
		const ownerzut7Hag = accounts[3]
		const valuevL8NhTk = BigInt("635")
		const spenderwr4JT3i = accounts[2]
		const ownerrjnOkUr = accounts[0]
		const nullR8ZQgrk = await contractFOzjGe8.allowance.call(ownerCnXPUuH, spender8xWRng, {from: accounts[1]});
		const nullithLRlq = await contractFOzjGe8.transferFrom.call(fromjyZKsmH, toSW1h0BJ, valuegX62oMH, {from: accounts[2]});
		const nullcTJn43L = await contractFOzjGe8.balanceOf.call(ownerzut7Hag, {from: accounts[1]});
		const nullIBJJk3V = await contractFOzjGe8.approve.call(spenderwr4JT3i, valuevL8NhTk, {from: accounts[1]});
		const nullF4Wcj0S = await contractFOzjGe8.balanceOf.call(ownerrjnOkUr, {from: accounts[0]});

		assert.equal(nullR8ZQgrk, 0)
		await expect(contractFOzjGe8.transferFrom.call(fromjyZKsmH, toSW1h0BJ, valuegX62oMH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractycWZn2B = await ERC20.new({from: accounts[1]});
		const spenderzbWAM42 = accounts[0]
		const ownerQmGugCC = accounts[1]
		const ownerc2NJA9q = accounts[4]
		const valueLJkr50d = BigInt("2026")
		const to50jfI7 = accounts[0]
		const addedValueipiShx = BigInt("984")
		const spendercyhxsgc = accounts[2]
		const valuehJemmyY = BigInt("489")
		const tokeUwVF = accounts[4]
		const valueqXrycgY = BigInt("1458")
		const top35ToMD = accounts[3]
		const nullBn5b8Hx = await contractycWZn2B.allowance.call(ownerQmGugCC, spenderzbWAM42, {from: accounts[4]});
		const null6I225G = await contractycWZn2B.balanceOf.call(ownerc2NJA9q, {from: "0x0000000000000000000000000000000000000001"});
		const nullX2tk8eN = await contractycWZn2B.transfer.call(to50jfI7, valueLJkr50d, {from: accounts[1]});
		const nullRmGw4Ex = await contractycWZn2B.increaseAllowance.call(spendercyhxsgc, addedValueipiShx, {from: accounts[0]});
		const nullWHal5Ov = await contractycWZn2B.transfer.call(tokeUwVF, valuehJemmyY, {from: accounts[4]});
		const nulllPrMt6S = await contractycWZn2B.transfer.call(top35ToMD, valueqXrycgY, {from: accounts[0]});

		assert.equal(null6I225G, 0)
		assert.equal(nullBn5b8Hx, 0)
		await expect(contractycWZn2B.transfer.call(to50jfI7, valueLJkr50d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractjmBJP6n = await ERC20.new({from: accounts[1]});
		const valuepHwfApq = BigInt("1276")
		const spenderqmRlyT = accounts[2]
		const addedValueaIPLNHz = BigInt("682")
		const spenderbowr0xh = accounts[1]
		const valuezgya1o2 = BigInt("1625")
		const toFFTmANj = accounts[3]
		const fromTk5OSa8 = accounts[4]
		const nullySHcBKh = await contractjmBJP6n.approve.call(spenderqmRlyT, valuepHwfApq, {from: accounts[1]});
		const nullNTh46nB = await contractjmBJP6n.increaseAllowance.call(spenderbowr0xh, addedValueaIPLNHz, {from: accounts[3]});
		const nullPsSRCCz = await contractjmBJP6n.transferFrom.call(fromTk5OSa8, toFFTmANj, valuezgya1o2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullNTh46nB, true)
		assert.equal(nullySHcBKh, true)
		await expect(contractjmBJP6n.transferFrom.call(fromTk5OSa8, toFFTmANj, valuezgya1o2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractcKxiPs7 = await ERC20.new({from: accounts[1]});
		const subtractedValueTX7hMh = BigInt("1784")
		const spenderdB1E8b9 = accounts[1]
		const valueVUBq6mA = BigInt("1626")
		const toM1BMU8x = accounts[3]
		const fromVpwBFLZ = accounts[5]
		const value8wPC2d = BigInt("2015")
		const toSRuYIcY = accounts[3]
		const nullwKs1n7 = await contractcKxiPs7.decreaseAllowance.call(spenderdB1E8b9, subtractedValueTX7hMh, {from: accounts[0]});
		const nullzmwnAlU = await contractcKxiPs7.transferFrom.call(fromVpwBFLZ, toM1BMU8x, valueVUBq6mA, {from: "0x0000000000000000000000000000000000000001"});
		const nullEBzXtAJ = await contractcKxiPs7.transfer.call(toSRuYIcY, value8wPC2d, {from: accounts[2]});
		const nulliDB2Mt = await contractcKxiPs7.totalSupply.call({from: accounts[1]});

		await expect(contractcKxiPs7.decreaseAllowance.call(spenderdB1E8b9, subtractedValueTX7hMh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractA4xRPhF = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuec5DMioI = BigInt("1890")
		const spenderCTPkRQU = accounts[1]
		const subtractedValueSktG8t = BigInt("669")
		const spenderhb6LVWA = accounts[0]
		const valueXrUnCLU = BigInt("1403")
		const spendermarPgpn = accounts[1]
		const nullOUFqvZe = await contractA4xRPhF.approve.call(spenderCTPkRQU, valuec5DMioI, {from: accounts[0]});
		const nullPzIbJrR = await contractA4xRPhF.decreaseAllowance.call(spenderhb6LVWA, subtractedValueSktG8t, {from: accounts[2]});
		const nullATClFqn = await contractA4xRPhF.approve.call(spendermarPgpn, valueXrUnCLU, {from: accounts[5]});
	});
})