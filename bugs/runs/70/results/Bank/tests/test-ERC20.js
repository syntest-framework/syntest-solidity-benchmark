const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractmxfODv1 = await ERC20.new({from: accounts[1]});
		const valueUOLoADg = BigInt("1143")
		const tovPLAdYU = accounts[3]
		const fromF4iHr9 = accounts[0]
		const valuePJvMbwV = BigInt("1260")
		const spenderJzkOzGA = accounts[4]
		const valueMwJp4ve = BigInt("754")
		const togBzlNbS = "0x0000000000000000000000000000000000000001"
		const nullX5B6Nz = await contractmxfODv1.transferFrom.call(fromF4iHr9, tovPLAdYU, valueUOLoADg, {from: accounts[0]});
		const nullygvMctE = await contractmxfODv1.approve.call(spenderJzkOzGA, valuePJvMbwV, {from: accounts[3]});
		const null2Yldj5 = await contractmxfODv1.transfer.call(togBzlNbS, valueMwJp4ve, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractmxfODv1.transferFrom.call(fromF4iHr9, tovPLAdYU, valueUOLoADg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractz3jhOI8 = await ERC20.new({from: accounts[1]});
		const valueIUM6egD = BigInt("1861")
		const touAcwYAC = accounts[5]
		const addedValueFKEn29x = BigInt("447")
		const spenderdwctwt = accounts[4]
		const addedValueMKAQPI = BigInt("287")
		const spenderCK3wUQt = accounts[1]
		const addedValueRo6mA7 = BigInt("1923")
		const spenderC1ANufI = "0x0000000000000000000000000000000000000001"
		const nullvzO3orc = await contractz3jhOI8.transfer.call(touAcwYAC, valueIUM6egD, {from: accounts[5]});
		const nullVqAtiNr = await contractz3jhOI8.increaseAllowance.call(spenderdwctwt, addedValueFKEn29x, {from: accounts[2]});
		const nullJqwmNub = await contractz3jhOI8.increaseAllowance.call(spenderCK3wUQt, addedValueMKAQPI, {from: accounts[4]});
		const nullhoFjof = await contractz3jhOI8.increaseAllowance.call(spenderC1ANufI, addedValueRo6mA7, {from: accounts[4]});
		const nully6ZFNbU = await contractz3jhOI8.totalSupply.call({from: accounts[1]});

		await expect(contractz3jhOI8.transfer.call(touAcwYAC, valueIUM6egD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractKvyUxJt = await ERC20.new({from: accounts[2]});
		const ownerOWtn4JN = accounts[2]
		const spendermWVkHUT = accounts[2]
		const ownerPgYKpes = accounts[5]
		const valuehEVtT1p = BigInt("986")
		const spendertSvPrWQ = accounts[4]
		const valueQcAEbQ = BigInt("1924")
		const todLFnmI9 = accounts[1]
		const fromkIQrlpY = accounts[0]
		const nullA0pqNB = await contractKvyUxJt.balanceOf.call(ownerOWtn4JN, {from: accounts[4]});
		const nullkkyrG78 = await contractKvyUxJt.allowance.call(ownerPgYKpes, spendermWVkHUT, {from: accounts[2]});
		const nullg3YdYmF = await contractKvyUxJt.approve.call(spendertSvPrWQ, valuehEVtT1p, {from: accounts[1]});
		const nullrTyAwuk = await contractKvyUxJt.totalSupply.call({from: accounts[2]});
		const nullP9LfrvR = await contractKvyUxJt.transferFrom.call(fromkIQrlpY, todLFnmI9, valueQcAEbQ, {from: accounts[3]});

		assert.equal(nullA0pqNB, 0)
		assert.equal(nullg3YdYmF, true)
		assert.equal(nullkkyrG78, 0)
		assert.equal(nullrTyAwuk, 0)
		await expect(contractKvyUxJt.transferFrom.call(fromkIQrlpY, todLFnmI9, valueQcAEbQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJVdo5Ti = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueeaQ8DrA = BigInt("1569")
		const tojrTE2O = accounts[5]
		const fromMb3JJ74 = accounts[4]
		const value4tzZd3 = BigInt("1933")
		const todyTQyn9 = accounts[4]
		const ownerwgpPgx8 = accounts[4]
		const nullmiRoGPk = await contractJVdo5Ti.transferFrom.call(fromMb3JJ74, tojrTE2O, valueeaQ8DrA, {from: "0x0000000000000000000000000000000000000001"});
		const nullHA2nLeX = await contractJVdo5Ti.transfer.call(todyTQyn9, value4tzZd3, {from: accounts[5]});
		const nullHE6Ys6 = await contractJVdo5Ti.balanceOf.call(ownerwgpPgx8, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractXTop00E = await ERC20.new({from: accounts[2]});
		const ownerLNMKgcs = accounts[3]
		const subtractedValueKr7U59 = BigInt("1057")
		const spenderwgomsB0 = accounts[0]
		const null5afc6p = await contractXTop00E.balanceOf.call(ownerLNMKgcs, {from: "0x0000000000000000000000000000000000000001"});
		const nulldiHLc3f = await contractXTop00E.decreaseAllowance.call(spenderwgomsB0, subtractedValueKr7U59, {from: accounts[0]});

		assert.equal(null5afc6p, 0)
		await expect(contractXTop00E.decreaseAllowance.call(spenderwgomsB0, subtractedValueKr7U59, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCHhGaTv = await ERC20.new({from: accounts[2]});
		const ownerwYFTeWD = accounts[2]
		const spenderPuOkhrP = accounts[2]
		const ownerk7NBosD = accounts[5]
		const spenderkx6xUi3 = accounts[3]
		const ownermu2D5zM = accounts[0]
		const valueorKBqg7 = BigInt("986")
		const spenderSGx3iM = accounts[4]
		const addedValueOVkdHLi = BigInt("185")
		const spenderBLxLaJx = accounts[3]
		const valuelDXtSQN = BigInt("1924")
		const toEo7d5nd = accounts[1]
		const fromYmTwz4z = accounts[0]
		const nullhYKh0eA = await contractCHhGaTv.balanceOf.call(ownerwYFTeWD, {from: accounts[4]});
		const nullkwxCc68 = await contractCHhGaTv.allowance.call(ownerk7NBosD, spenderPuOkhrP, {from: accounts[2]});
		const nullhBMaVhU = await contractCHhGaTv.allowance.call(ownermu2D5zM, spenderkx6xUi3, {from: accounts[2]});
		const nullAT5yNbu = await contractCHhGaTv.approve.call(spenderSGx3iM, valueorKBqg7, {from: accounts[1]});
		const nullda9eKON = await contractCHhGaTv.totalSupply.call({from: accounts[2]});
		const nullOpyzc0Z = await contractCHhGaTv.increaseAllowance.call(spenderBLxLaJx, addedValueOVkdHLi, {from: accounts[3]});
		const nullk3ZRp5u = await contractCHhGaTv.transferFrom.call(fromYmTwz4z, toEo7d5nd, valuelDXtSQN, {from: accounts[3]});

		assert.equal(nullAT5yNbu, true)
		assert.equal(nullOpyzc0Z, true)
		assert.equal(nullda9eKON, 0)
		assert.equal(nullhBMaVhU, 0)
		assert.equal(nullhYKh0eA, 0)
		assert.equal(nullkwxCc68, 0)
		await expect(contractCHhGaTv.transferFrom.call(fromYmTwz4z, toEo7d5nd, valuelDXtSQN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})