const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractdUoWXTx = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressigYO3x1 = accounts[3]
		const address4cPXUL = accounts[1]
		const uintRnxIOb0 = BigInt("658")
		const addressKs5aVF5 = accounts[0]
		const uintjruXwZ5 = BigInt("676")
		const addressyvzzXya = accounts[2]
		const uinteY5j4hb = BigInt("1065")
		const addressUqvzkS9 = accounts[0]
		const addressfXdzqUp = accounts[4]
		const addressdUCX189 = accounts[4]
		const uint256xeC36mn = await HTDD_contractdUoWXTx.allowance.call(address4cPXUL, addressigYO3x1, {from: accounts[1]});
		const boolBpllmeF = await HTDD_contractdUoWXTx.approve.call(addressKs5aVF5, uintRnxIOb0, {from: accounts[0]});
		const boolKI3w0q3 = await HTDD_contractdUoWXTx.approve.call(addressyvzzXya, uintjruXwZ5, {from: accounts[1]});
		const bool1BtenY = await HTDD_contractdUoWXTx.approve.call(addressUqvzkS9, uinteY5j4hb, {from: accounts[4]});
		const uint256rs1hchA = await HTDD_contractdUoWXTx.allowance.call(addressdUCX189, addressfXdzqUp, {from: accounts[2]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractQzAEQQY = await HTDD_contract.new({from: accounts[0]});
		const addressrgHDjvE = accounts[0]
		const addressQic0OD = accounts[2]
		const uinteU2vvTL = BigInt("1634")
		const addressHmiU52s = accounts[5]
		const addressyrctXzK = accounts[3]
		const addressFSdmzIy = accounts[3]
		const addressANyvD1j = accounts[0]
		const uint256gAOtbg = await HTDD_contractQzAEQQY.allowance.call(addressQic0OD, addressrgHDjvE, {from: accounts[2]});
//		const boolCaY0MKP = await HTDD_contractQzAEQQY.transferFrom.call(addressyrctXzK, addressHmiU52s, uinteU2vvTL, {from: accounts[1]});
//		const uint256bEdleK = await HTDD_contractQzAEQQY.allowance.call(addressANyvD1j, addressFSdmzIy, {from: accounts[2]});

		assert.equal(uint256gAOtbg, BigInt("0"))
		await expect(HTDD_contractQzAEQQY.transferFrom.call(addressyrctXzK, addressHmiU52s, uinteU2vvTL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractIpd81T = await HTDD_contract.new({from: accounts[0]});
		const uintQYj1WMx = BigInt("1355")
		const addressWb6MzuP = accounts[4]
		const uintzSZyJFU = BigInt("1603")
		const addresscOOYd4Z = accounts[4]
		const addresshiVrvXk = accounts[4]
		const booljUMf1rk = await HTDD_contractIpd81T.approve.call(addressWb6MzuP, uintQYj1WMx, {from: accounts[1]});
//		const boolnUcMP4V = await HTDD_contractIpd81T.transferFrom.call(addresshiVrvXk, addresscOOYd4Z, uintzSZyJFU, {from: accounts[5]});

		assert.equal(booljUMf1rk, true)
		await expect(HTDD_contractIpd81T.transferFrom.call(addresshiVrvXk, addresscOOYd4Z, uintzSZyJFU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracth4UKafg = await HTDD_contract.new({from: accounts[1]});
		const uintlmH07CD = BigInt("967")
		const addresseqwE04r = accounts[5]
		const uintbiYyR0 = BigInt("313")
		const addressauAkChq = accounts[0]
		const addressP81m8Bz = "0x0000000000000000000000000000000000000001"
		const uintousVZn3 = BigInt("1449")
		const addressgbJhfX = accounts[0]
//		const boolWPPucmQ = await HTDD_contracth4UKafg.transfer.call(addresseqwE04r, uintlmH07CD, {from: accounts[2]});
//		const boolr3OyYlK = await HTDD_contracth4UKafg.transferFrom.call(addressP81m8Bz, addressauAkChq, uintbiYyR0, {from: accounts[0]});
//		const boole9Fh4oY = await HTDD_contracth4UKafg.approve.call(addressgbJhfX, uintousVZn3, {from: accounts[3]});

		await expect(HTDD_contracth4UKafg.transfer.call(addresseqwE04r, uintlmH07CD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})