const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractsMcEivB = await ERC20.new({from: accounts[3]});
		const valueMutSC0G = BigInt("1370")
		const spenderhAtHckt = accounts[4]
		const spenderNhtDlWV = accounts[0]
		const ownerWXXBHp3 = accounts[2]
		const subtractedValueT9fhYwv = BigInt("1616")
		const spendergGxwsKy = accounts[2]
		const addedValueFXHCA3y = BigInt("1880")
		const spenderGR801b = accounts[0]
		const valuecPSn9pn = BigInt("1875")
		const tohuUkczV = accounts[0]
		const nullJdERJpu = await contractsMcEivB.approve.call(spenderhAtHckt, valueMutSC0G, {from: accounts[3]});
		const nullctmVtIT = await contractsMcEivB.allowance.call(ownerWXXBHp3, spenderNhtDlWV, {from: accounts[4]});
		const nullfeWH2S5 = await contractsMcEivB.decreaseAllowance.call(spendergGxwsKy, subtractedValueT9fhYwv, {from: accounts[2]});
		const nullpPT2knE = await contractsMcEivB.increaseAllowance.call(spenderGR801b, addedValueFXHCA3y, {from: accounts[3]});
		const nullncliqNj = await contractsMcEivB.transfer.call(tohuUkczV, valuecPSn9pn, {from: accounts[5]});

		assert.equal(nullJdERJpu, true)
		assert.equal(nullctmVtIT, 0)
		await expect(contractsMcEivB.decreaseAllowance.call(spendergGxwsKy, subtractedValueT9fhYwv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDhjkLTL = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuebVHOBcf = BigInt("255")
		const toKhkGQAf = accounts[3]
		const fromQkNAB0n = accounts[0]
		const valuehNlIBnc = BigInt("1169")
		const spender3ieJun = accounts[1]
		const ownerIcJKFpR = accounts[0]
		const nullgVSRUQ4 = await contractDhjkLTL.transferFrom.call(fromQkNAB0n, toKhkGQAf, valuebVHOBcf, {from: accounts[3]});
		const nullscENJVs = await contractDhjkLTL.approve.call(spender3ieJun, valuehNlIBnc, {from: accounts[0]});
		const nulljWhWqkt = await contractDhjkLTL.totalSupply.call({from: accounts[3]});
		const nulluzvcFhM = await contractDhjkLTL.balanceOf.call(ownerIcJKFpR, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractKzbiCal = await ERC20.new({from: accounts[5]});
		const addedValueUv6nAxR = BigInt("1213")
		const spenderHoknQ9A = accounts[1]
		const ownerVkWrjbE = accounts[0]
		const addedValueYhqkxAh = BigInt("74")
		const spenderyEMErrP = accounts[4]
		const valuepkw5zfm = BigInt("1260")
		const tout7TGpM = accounts[2]
		const fromSqbNI5Y = accounts[1]
		const subtractedValueLe4TYl = BigInt("480")
		const spenderWJAitef = accounts[2]
		const nullN76GZ4q = await contractKzbiCal.increaseAllowance.call(spenderHoknQ9A, addedValueUv6nAxR, {from: accounts[5]});
		const nullrshlwXf = await contractKzbiCal.balanceOf.call(ownerVkWrjbE, {from: accounts[5]});
		const nullBJm7yci = await contractKzbiCal.increaseAllowance.call(spenderyEMErrP, addedValueYhqkxAh, {from: accounts[3]});
		const nullYbZXopx = await contractKzbiCal.transferFrom.call(fromSqbNI5Y, tout7TGpM, valuepkw5zfm, {from: accounts[4]});
		const nullYZzDKTA = await contractKzbiCal.decreaseAllowance.call(spenderWJAitef, subtractedValueLe4TYl, {from: accounts[1]});
		const nullJff6Raf = await contractKzbiCal.totalSupply.call({from: accounts[4]});

		assert.equal(nullBJm7yci, true)
		assert.equal(nullN76GZ4q, true)
		assert.equal(nullrshlwXf, 0)
		await expect(contractKzbiCal.transferFrom.call(fromSqbNI5Y, tout7TGpM, valuepkw5zfm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractB0nqyt7 = await ERC20.new({from: accounts[2]});
		const valueRFYTVeU = BigInt("1679")
		const toiA2a64U = accounts[2]
		const nullMrBlavu = await contractB0nqyt7.totalSupply.call({from: accounts[3]});
		const nullejBw7N = await contractB0nqyt7.transfer.call(toiA2a64U, valueRFYTVeU, {from: accounts[3]});

		assert.equal(nullMrBlavu, 0)
		await expect(contractB0nqyt7.transfer.call(toiA2a64U, valueRFYTVeU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})