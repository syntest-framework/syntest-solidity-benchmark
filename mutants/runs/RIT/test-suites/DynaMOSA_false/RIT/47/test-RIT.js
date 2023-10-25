const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITUuJktZu = await RIT.new({from: accounts[2]});
		const uintFp1UCAM = BigInt("623")
		const addressm1LlUp2 = accounts[4]
		const addressibw3bRS = "0x0000000000000000000000000000000000000001"
		const uintqwGjXBX = BigInt("441")
		const addressrKJhz1g = accounts[0]
		const boolg8cWeYX = await RITUuJktZu.transferFrom.call(addressibw3bRS, addressm1LlUp2, uintFp1UCAM, {from: accounts[0]});
		const boolGjE0oHE = await RITUuJktZu.increaseAllowance.call(addressrKJhz1g, uintqwGjXBX, {from: accounts[4]});
		const string8wdegw = await RITUuJktZu.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RITUuJktZu.transferFrom.call(addressibw3bRS, addressm1LlUp2, uintFp1UCAM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITXysXKYK = await RIT.new({from: accounts[0]});
		const uintgn3nPRA = BigInt("760")
		const addressE7Frjo = accounts[2]
		const uintHAIQcpA = BigInt("317")
		const addressc6vW7hD = accounts[0]
		const uint256IGrdDl3 = await RITXysXKYK.totalSupply.call({from: accounts[2]});
		const stringG22wY8K = await RITXysXKYK.name.call({from: accounts[0]});
		const boolqbdgEr = await RITXysXKYK.approve.call(addressE7Frjo, uintgn3nPRA, {from: accounts[0]});
		const booliKQQK8 = await RITXysXKYK.transfer.call(addressc6vW7hD, uintHAIQcpA, {from: accounts[0]});

		assert.equal(boolqbdgEr, true)
		assert.equal(stringG22wY8K, "Real Estate Investment Token")
		assert.equal(uint256IGrdDl3, BigInt("500000000000000000000000000"))
		await expect(RITXysXKYK.transfer.call(addressc6vW7hD, uintHAIQcpA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITNZrgqDp = await RIT.new({from: accounts[1]});
		const addresstUzHCVi = accounts[1]
		const addressZmeRzCi = accounts[2]
		const uintuhUwS2b = BigInt("1565")
		const addressc0vi3Ed = accounts[3]
		const uint256L8RVmSB = await RITNZrgqDp.allowance.call(addressZmeRzCi, addresstUzHCVi, {from: accounts[3]});
		const stringaYberIt = await RITNZrgqDp.symbol.call({from: accounts[4]});
		const boolvg1FvJg = await RITNZrgqDp.increaseAllowance.call(addressc0vi3Ed, uintuhUwS2b, {from: accounts[2]});
		const uint256tmgrPxM = await RITNZrgqDp.totalSupply.call({from: accounts[1]});
		const stringsCXf2nW = await RITNZrgqDp.symbol.call({from: accounts[4]});
		const stringEyf8bsb = await RITNZrgqDp.symbol.call({from: accounts[4]});

		assert.equal(boolvg1FvJg, true)
		assert.equal(stringEyf8bsb, "RIT 2.0")
		assert.equal(stringaYberIt, "RIT 2.0")
		assert.equal(stringsCXf2nW, "RIT 2.0")
		assert.equal(uint256L8RVmSB, BigInt("0"))
		assert.equal(uint256tmgrPxM, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITVQdRx3 = await RIT.new({from: accounts[0]});
		const uintZYIGPn = BigInt("538")
		const addressSypT5LO = accounts[5]
		const uint8iIywm3j = await RITVQdRx3.decimals.call({from: accounts[2]});
		const stringRwZDago = await RITVQdRx3.symbol.call({from: accounts[2]});
		const uint8HVZlWDH = await RITVQdRx3.decimals.call({from: accounts[1]});
		const booleRRFl1 = await RITVQdRx3.increaseAllowance.call(addressSypT5LO, uintZYIGPn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleRRFl1, true)
		assert.equal(stringRwZDago, "RIT 2.0")
		assert.equal(uint8HVZlWDH, BigInt("18"))
		assert.equal(uint8iIywm3j, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITK4z1ekp = await RIT.new({from: accounts[2]});
		const addressQfX4VdZ = accounts[2]
		const address0LaWS4 = accounts[0]
		const uintOlIp0e5 = BigInt("1063")
		const addressRCHH237 = accounts[2]
		const uintwh51eOD = BigInt("904")
		const addresskR7YPL1 = accounts[0]
		const uint256zepjsy = await RITK4z1ekp.allowance.call(address0LaWS4, addressQfX4VdZ, {from: accounts[0]});
		const boolQxgg4Da = await RITK4z1ekp.increaseAllowance.call(addressRCHH237, uintOlIp0e5, {from: accounts[0]});
		const stringbA2wcmX = await RITK4z1ekp.symbol.call({from: accounts[3]});
		const boolAlY2js = await RITK4z1ekp.decreaseAllowance.call(addresskR7YPL1, uintwh51eOD, {from: accounts[5]});

		assert.equal(boolQxgg4Da, true)
		assert.equal(stringbA2wcmX, "RIT 2.0")
		assert.equal(uint256zepjsy, BigInt("0"))
		await expect(RITK4z1ekp.decreaseAllowance.call(addresskR7YPL1, uintwh51eOD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITNZrgqDp = await RIT.new({from: accounts[1]});
		const addressVsQhbwo = accounts[1]
		const addressJvfKGdS = accounts[2]
		const uint9b9PLj = BigInt("1565")
		const addressHOCLs33 = accounts[3]
		const uintGnf9VM0 = BigInt("986")
		const uint256L8RVmSB = await RITNZrgqDp.allowance.call(addressJvfKGdS, addressVsQhbwo, {from: accounts[3]});
		const stringFgbHB86 = await RITNZrgqDp.symbol.call({from: accounts[4]});
		const stringaYberIt = await RITNZrgqDp.symbol.call({from: accounts[4]});
		const boolvg1FvJg = await RITNZrgqDp.increaseAllowance.call(addressHOCLs33, uint9b9PLj, {from: accounts[2]});
		const uint256tmgrPxM = await RITNZrgqDp.totalSupply.call({from: accounts[1]});
		const uint256s4CwesR = await RITNZrgqDp._burn.call(uintGnf9VM0, {from: "0x0000000000000000000000000000000000000001"});
		const stringsCXf2nW = await RITNZrgqDp.symbol.call({from: accounts[4]});
		const stringEyf8bsb = await RITNZrgqDp.symbol.call({from: accounts[4]});

		assert.equal(boolvg1FvJg, true)
		assert.equal(stringFgbHB86, "RIT 2.0")
		assert.equal(stringaYberIt, "RIT 2.0")
		assert.equal(uint256L8RVmSB, BigInt("0"))
		assert.equal(uint256tmgrPxM, BigInt("500000000000000000000000000"))
		await expect(RITNZrgqDp._burn.call(uintGnf9VM0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITJcaiwUD = await RIT.new({from: accounts[0]});
		const addressnWDYMDg = accounts[3]
		const addressG5TrjGP = accounts[4]
		const uintgAz7DTM = BigInt("504")
		const addressBqiJLqx = accounts[5]
		const uint256BBZ00Iu = await RITJcaiwUD.totalSupply.call({from: accounts[2]});
		const uint256EXy20Wo = await RITJcaiwUD.balanceOf.call(addressnWDYMDg, {from: accounts[5]});
		const uint256ZMOnMoo = await RITJcaiwUD.balanceOf.call(addressG5TrjGP, {from: accounts[3]});
		const boolbuCN7mV = await RITJcaiwUD.approve.call(addressBqiJLqx, uintgAz7DTM, {from: accounts[4]});

		assert.equal(boolbuCN7mV, true)
		assert.equal(uint256BBZ00Iu, BigInt("500000000000000000000000000"))
		assert.equal(uint256EXy20Wo, BigInt("0"))
		assert.equal(uint256ZMOnMoo, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITCgD0Sux = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinth8DrDgP = BigInt("603")
		const addresswL12Wml = accounts[2]
		const uinttTHUj7 = BigInt("779")
		const addresswqp7JS0 = accounts[4]
		const addressQwmzXKJ = "0x0000000000000000000000000000000000000001"
		const uintCY9Iyw5 = BigInt("1318")
		const addressNxx8ozP = "0x0000000000000000000000000000000000000001"
		const boolHWmXzeF = await RITCgD0Sux.approve.call(addresswL12Wml, uinth8DrDgP, {from: accounts[0]});
		const boolSADh7QX = await RITCgD0Sux.approve.call(addresswqp7JS0, uinttTHUj7, {from: accounts[3]});
		const uint256YGJ0Jy = await RITCgD0Sux.balanceOf.call(addressQwmzXKJ, {from: accounts[2]});
		const stringTsZOhWw = await RITCgD0Sux.symbol.call({from: accounts[1]});
		const boolclg4kL9 = await RITCgD0Sux.transfer.call(addressNxx8ozP, uintCY9Iyw5, {from: accounts[5]});
	});

	it('test for RIT', async () => {
		const RITUuJktZu = await RIT.new({from: accounts[2]});
		const uintrejS5td = BigInt("623")
		const address7oxekr = accounts[4]
		const addresslwc7UCS = "0x0000000000000000000000000000000000000000"
		const addressB8dzGHT = accounts[1]
		const addressGQgmhYj = accounts[1]
		const boolg8cWeYX = await RITUuJktZu.transferFrom.call(addresslwc7UCS, address7oxekr, uintrejS5td, {from: accounts[0]});
		const string8wdegw = await RITUuJktZu.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LXVoXYZ = await RITUuJktZu.allowance.call(addressGQgmhYj, addressB8dzGHT, {from: accounts[1]});
		const uint256Mh71ubz = await RITUuJktZu.totalSupply.call({from: accounts[2]});

		await expect(RITUuJktZu.transferFrom.call(addresslwc7UCS, address7oxekr, uintrejS5td, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})