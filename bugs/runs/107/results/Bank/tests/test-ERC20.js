const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractKKQbBz2 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueoQi2QRC = BigInt("2037")
		const toubq9fM3 = accounts[0]
		const fromFvi6lp1 = accounts[3]
		const valuerxSACwi = BigInt("1046")
		const spenderM6WDo1p = accounts[2]
		const valueoLHrYcH = BigInt("320")
		const toiz2vXTv = accounts[3]
		const fromnL3SwP4 = accounts[5]
		const valueVzK7n4f = BigInt("1623")
		const toN8XGVSx = accounts[4]
		const valuerNPq5p8 = BigInt("1904")
		const toch8nRNh = "0x0000000000000000000000000000000000000001"
		const nullOlUzkhg = await contractKKQbBz2.transferFrom.call(fromFvi6lp1, toubq9fM3, valueoQi2QRC, {from: accounts[2]});
		const nullhOoSesM = await contractKKQbBz2.approve.call(spenderM6WDo1p, valuerxSACwi, {from: accounts[4]});
		const nullloxNYv5 = await contractKKQbBz2.transferFrom.call(fromnL3SwP4, toiz2vXTv, valueoLHrYcH, {from: accounts[1]});
		const nulllynB7rb = await contractKKQbBz2.transfer.call(toN8XGVSx, valueVzK7n4f, {from: accounts[2]});
		const nullnYw9J4 = await contractKKQbBz2.transfer.call(toch8nRNh, valuerNPq5p8, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractIjJ8s5I = await ERC20.new({from: accounts[0]});
		const addedValueJTRtts = BigInt("694")
		const spenderh0IQZR = accounts[1]
		const addedValueuOTnNSW = BigInt("388")
		const spenderktfTFJt = accounts[3]
		const valuevTtFFRo = BigInt("942")
		const topvPsNJC = accounts[3]
		const subtractedValuev4KL1gj = BigInt("367")
		const spenderiHZxoO = accounts[4]
		const valuehvR0xBf = BigInt("1924")
		const spender2tbVLn = accounts[2]
		const spenderYwEhjDU = accounts[0]
		const ownerP2uVGUM = accounts[4]
		const nullKlsuesk = await contractIjJ8s5I.increaseAllowance.call(spenderh0IQZR, addedValueJTRtts, {from: accounts[1]});
		const nullOw5zRQr = await contractIjJ8s5I.increaseAllowance.call(spenderktfTFJt, addedValueuOTnNSW, {from: accounts[2]});
		const nulleZD3ouB = await contractIjJ8s5I.transfer.call(topvPsNJC, valuevTtFFRo, {from: accounts[0]});
		const nullwfUSDa6 = await contractIjJ8s5I.decreaseAllowance.call(spenderiHZxoO, subtractedValuev4KL1gj, {from: accounts[1]});
		const nulltjscbq = await contractIjJ8s5I.approve.call(spender2tbVLn, valuehvR0xBf, {from: accounts[2]});
		const nullfyAGQ7G = await contractIjJ8s5I.allowance.call(ownerP2uVGUM, spenderYwEhjDU, {from: accounts[2]});

		assert.equal(nullKlsuesk, true)
		assert.equal(nullOw5zRQr, true)
		await expect(contractIjJ8s5I.transfer.call(topvPsNJC, valuevTtFFRo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractBSAJJDN = await ERC20.new({from: accounts[3]});
		const spenderOsipZ7 = accounts[4]
		const ownerESsZ5jp = accounts[2]
		const subtractedValueW7wgrZu = BigInt("1586")
		const spenderJ2brpfw = accounts[3]
		const nulleoZxIZZ = await contractBSAJJDN.allowance.call(ownerESsZ5jp, spenderOsipZ7, {from: accounts[5]});
		const null1vkDdJ = await contractBSAJJDN.decreaseAllowance.call(spenderJ2brpfw, subtractedValueW7wgrZu, {from: accounts[3]});

		assert.equal(nulleoZxIZZ, 0)
		await expect(contractBSAJJDN.decreaseAllowance.call(spenderJ2brpfw, subtractedValueW7wgrZu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractkE1s4na = await ERC20.new({from: accounts[0]});
		const spenderViFay5 = accounts[2]
		const ownerQ3FZ9w8 = accounts[1]
		const valuetqz25XL = BigInt("1550")
		const spenderBhv16UD = accounts[0]
		const nullPyEUA8l = await contractkE1s4na.allowance.call(ownerQ3FZ9w8, spenderViFay5, {from: accounts[1]});
		const nullnF8U8JR = await contractkE1s4na.totalSupply.call({from: accounts[3]});
		const nullu7Zh4aV = await contractkE1s4na.approve.call(spenderBhv16UD, valuetqz25XL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullPyEUA8l, 0)
		assert.equal(nullnF8U8JR, 0)
		assert.equal(nullu7Zh4aV, true)
	});

	it('test for ERC20', async () => {
		const contractlAFdLX = await ERC20.new({from: accounts[3]});
		const ownericzF9v = accounts[2]
		const valuetn6YWJt = BigInt("555")
		const tonG2paGM = accounts[0]
		const fromUJcg4xn = accounts[5]
		const spenderzraYEtw = accounts[0]
		const ownerx7jbEwq = accounts[2]
		const nullUUHCTr8 = await contractlAFdLX.balanceOf.call(ownericzF9v, {from: accounts[3]});
		const nullVqPBKBc = await contractlAFdLX.transferFrom.call(fromUJcg4xn, tonG2paGM, valuetn6YWJt, {from: accounts[0]});
		const nullICqPPhT = await contractlAFdLX.allowance.call(ownerx7jbEwq, spenderzraYEtw, {from: accounts[4]});

		assert.equal(nullUUHCTr8, 0)
		await expect(contractlAFdLX.transferFrom.call(fromUJcg4xn, tonG2paGM, valuetn6YWJt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})