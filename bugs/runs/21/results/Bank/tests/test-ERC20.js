const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractXMoO8B2 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueNJzqHw4 = BigInt("390")
		const toDGXq2sD = accounts[4]
		const fromPj0CgIv = "0x0000000000000000000000000000000000000001"
		const valuecvpFf0C = BigInt("280")
		const toNgHe0UH = accounts[2]
		const valueEP5jv3t = BigInt("396")
		const spenderMapOPq2 = "0x0000000000000000000000000000000000000001"
		const valuetpDDk5E = BigInt("1660")
		const tocWTZqp7 = accounts[0]
		const fromnEF6zcz = accounts[3]
		const null5jMHdW = await contractXMoO8B2.transferFrom.call(fromPj0CgIv, toDGXq2sD, valueNJzqHw4, {from: "0x0000000000000000000000000000000000000001"});
		const nullN06Xxe = await contractXMoO8B2.transfer.call(toNgHe0UH, valuecvpFf0C, {from: accounts[1]});
		const nullpCP1Fy = await contractXMoO8B2.approve.call(spenderMapOPq2, valueEP5jv3t, {from: accounts[0]});
		const nullQMBBbMJ = await contractXMoO8B2.transferFrom.call(fromnEF6zcz, tocWTZqp7, valuetpDDk5E, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractj6132LS = await ERC20.new({from: accounts[2]});
		const spenderBYxEN1 = accounts[0]
		const ownerFbYq5cp = accounts[3]
		const nullA1OPOPE = await contractj6132LS.totalSupply.call({from: accounts[2]});
		const nullU4eXcna = await contractj6132LS.allowance.call(ownerFbYq5cp, spenderBYxEN1, {from: accounts[3]});

		assert.equal(nullA1OPOPE, 0)
		assert.equal(nullU4eXcna, 0)
	});

	it('test for ERC20', async () => {
		const contractE4w5mH = await ERC20.new({from: accounts[2]});
		const valueM0xjA0i = BigInt("278")
		const spenderLIqdodI = accounts[4]
		const valuePRLhGqo = BigInt("296")
		const tosw3Y0Q8 = accounts[1]
		const valueganf1Lo = BigInt("1452")
		const todVewrwW = accounts[1]
		const ownercJt99ZQ = accounts[2]
		const nullg3848jR = await contractE4w5mH.approve.call(spenderLIqdodI, valueM0xjA0i, {from: accounts[2]});
		const nullz3npzr = await contractE4w5mH.transfer.call(tosw3Y0Q8, valuePRLhGqo, {from: accounts[2]});
		const nulltWmTYI1 = await contractE4w5mH.transfer.call(todVewrwW, valueganf1Lo, {from: accounts[2]});
		const nullSzFBc1h = await contractE4w5mH.balanceOf.call(ownercJt99ZQ, {from: accounts[0]});

		assert.equal(nullg3848jR, true)
		await expect(contractE4w5mH.transfer.call(tosw3Y0Q8, valuePRLhGqo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractyqoreJq = await ERC20.new({from: accounts[4]});
		const valuei7Oedn = BigInt("816")
		const spenderGYOu6Ro = accounts[1]
		const subtractedValueKihgAW8 = BigInt("904")
		const spenderSlByAMF = accounts[1]
		const nullq8ZqT6f = await contractyqoreJq.approve.call(spenderGYOu6Ro, valuei7Oedn, {from: accounts[4]});
		const nullOtnEp7x = await contractyqoreJq.decreaseAllowance.call(spenderSlByAMF, subtractedValueKihgAW8, {from: accounts[1]});
		const nullJO2MXCz = await contractyqoreJq.totalSupply.call({from: accounts[5]});

		assert.equal(nullq8ZqT6f, true)
		await expect(contractyqoreJq.decreaseAllowance.call(spenderSlByAMF, subtractedValueKihgAW8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractj5T3Oy1 = await ERC20.new({from: accounts[3]});
		const valuemCzN6vb = BigInt("1833")
		const spenderhM717Af = accounts[2]
		const valuefyuxjm1 = BigInt("1441")
		const toNpPXbwT = accounts[5]
		const fromfIU8R4 = accounts[0]
		const spendereYyae4i = accounts[2]
		const ownerUjiVVo = accounts[0]
		const spenderiWYeVZ2 = "0x0000000000000000000000000000000000000001"
		const ownergigCf3l = accounts[1]
		const nullMT6hdsU = await contractj5T3Oy1.approve.call(spenderhM717Af, valuemCzN6vb, {from: "0x0000000000000000000000000000000000000001"});
		const nullnRrHfny = await contractj5T3Oy1.transferFrom.call(fromfIU8R4, toNpPXbwT, valuefyuxjm1, {from: accounts[3]});
		const nullpXFGST = await contractj5T3Oy1.allowance.call(ownerUjiVVo, spendereYyae4i, {from: accounts[2]});
		const null04PYzU = await contractj5T3Oy1.allowance.call(ownergigCf3l, spenderiWYeVZ2, {from: accounts[3]});

		assert.equal(nullMT6hdsU, true)
		await expect(contractj5T3Oy1.transferFrom.call(fromfIU8R4, toNpPXbwT, valuefyuxjm1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractt34uMjv = await ERC20.new({from: accounts[3]});
		const addedValuexhnSurH = BigInt("34")
		const spendereKdUYLL = accounts[3]
		const addedValuerQyblt3 = BigInt("1240")
		const spenderwLF3x8 = accounts[3]
		const valueDpI0jWk = BigInt("1597")
		const spenderd1MMYzl = "0x0000000000000000000000000000000000000001"
		const nullAakfWo8 = await contractt34uMjv.increaseAllowance.call(spendereKdUYLL, addedValuexhnSurH, {from: accounts[1]});
		const nullW2ZFFXc = await contractt34uMjv.increaseAllowance.call(spenderwLF3x8, addedValuerQyblt3, {from: accounts[0]});
		const nulloRSLe9d = await contractt34uMjv.approve.call(spenderd1MMYzl, valueDpI0jWk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullAakfWo8, true)
		assert.equal(nullW2ZFFXc, true)
		assert.equal(nulloRSLe9d, true)
	});

	it('test for ERC20', async () => {
		const contractbnnbA3e = await ERC20.new({from: accounts[2]});
		const owneriNzpVPf = accounts[2]
		const spenderSnmHKZF = accounts[0]
		const ownercEGoUxS = accounts[4]
		const nullURkokgk = await contractbnnbA3e.totalSupply.call({from: accounts[2]});
		const null4ZJnB2 = await contractbnnbA3e.balanceOf.call(owneriNzpVPf, {from: accounts[3]});
		const nullscwnixg = await contractbnnbA3e.allowance.call(ownercEGoUxS, spenderSnmHKZF, {from: accounts[3]});

		assert.equal(null4ZJnB2, 0)
		assert.equal(nullURkokgk, 0)
		assert.equal(nullscwnixg, 0)
	});
})