const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITblRXQy = await RIT.new({from: accounts[4]});
		const uintpMY2jdS = BigInt("1764")
		const addressDd5jRnW = "0x0000000000000000000000000000000000000001"
		const addressY6ItsY2 = accounts[1]
		const uint8NqRpLaS = await RITblRXQy.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringw9tbjZw = await RITblRXQy.name.call({from: accounts[1]});
//		const boolh69ypRC = await RITblRXQy.transferFrom.call(addressY6ItsY2, addressDd5jRnW, uintpMY2jdS, {from: accounts[1]});
//		const stringXdEFFlf = await RITblRXQy.name.call({from: accounts[5]});

		assert.equal(stringw9tbjZw, "Real Estate Investment Token")
		assert.equal(uint8NqRpLaS, BigInt("18"))
		await expect(RITblRXQy.transferFrom.call(addressY6ItsY2, addressDd5jRnW, uintpMY2jdS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITlhqZSQS = await RIT.new({from: accounts[0]});
		const addressOs0I5eD = accounts[1]
		const uintyPlTZii = BigInt("1710")
		const addressZKZFBzy = accounts[3]
		const uintQkn0D87 = BigInt("2031")
		const addressUbcpco = accounts[0]
		const addresspJHVN2 = accounts[3]
		const addressXM479F = accounts[4]
		const addresscoqABuT = accounts[1]
		const addressWGSmvlV = accounts[4]
		const uint256xkXbvdr = await RITlhqZSQS.balanceOf.call(addressOs0I5eD, {from: accounts[2]});
		const boolj1erUFh = await RITlhqZSQS.approve.call(addressZKZFBzy, uintyPlTZii, {from: accounts[2]});
		const boolVXmeHMS = await RITlhqZSQS.approve.call(addressUbcpco, uintQkn0D87, {from: accounts[5]});
		const uint256CXGVHp = await RITlhqZSQS.balanceOf.call(addresspJHVN2, {from: accounts[0]});
		const uint256rjaD89A = await RITlhqZSQS.allowance.call(addresscoqABuT, addressXM479F, {from: accounts[2]});
		const uint256x4tAYqJ = await RITlhqZSQS.balanceOf.call(addressWGSmvlV, {from: accounts[4]});

		assert.equal(boolVXmeHMS, true)
		assert.equal(boolj1erUFh, true)
		assert.equal(uint256CXGVHp, BigInt("0"))
		assert.equal(uint256rjaD89A, BigInt("0"))
		assert.equal(uint256x4tAYqJ, BigInt("0"))
		assert.equal(uint256xkXbvdr, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITwercss = await RIT.new({from: accounts[2]});
		const uintDb08Tzt = BigInt("867")
		const addressJ5FZcf4 = accounts[5]
		const uintR1OOntx = BigInt("1207")
		const addressteZJvqX = accounts[2]
//		const boolxnUTwoq = await RITwercss.decreaseAllowance.call(addressJ5FZcf4, uintDb08Tzt, {from: accounts[0]});
//		const boolReP2Cdm = await RITwercss.decreaseAllowance.call(addressteZJvqX, uintR1OOntx, {from: accounts[0]});
//		const stringXtV0H1F = await RITwercss.symbol.call({from: accounts[4]});
//		const stringf6TDYth = await RITwercss.symbol.call({from: accounts[1]});
//		const uint8h5ZYQ0Q = await RITwercss.decimals.call({from: accounts[1]});

		await expect(RITwercss.decreaseAllowance.call(addressJ5FZcf4, uintDb08Tzt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITO6nzH41 = await RIT.new({from: accounts[4]});
		const addresswqLCm4q = accounts[3]
		const addressVhFAXaw = accounts[0]
		const uintzZgDx5N = BigInt("1401")
		const addressTnM9PPJ = accounts[0]
		const uintU0McyPJ = BigInt("1052")
		const addressT8Zk9Xl = accounts[0]
		const addressYKh4Hre = accounts[4]
		const stringkg3KKs = await RITO6nzH41.symbol.call({from: accounts[2]});
		const uint256tqhriuc = await RITO6nzH41.allowance.call(addressVhFAXaw, addresswqLCm4q, {from: accounts[1]});
		const boolNOU96sT = await RITO6nzH41.increaseAllowance.call(addressTnM9PPJ, uintzZgDx5N, {from: accounts[5]});
//		const boolgpmg2m = await RITO6nzH41.transferFrom.call(addressYKh4Hre, addressT8Zk9Xl, uintU0McyPJ, {from: accounts[4]});

		assert.equal(boolNOU96sT, true)
		assert.equal(stringkg3KKs, "RIT 2.0")
		assert.equal(uint256tqhriuc, BigInt("0"))
		await expect(RITO6nzH41.transferFrom.call(addressYKh4Hre, addressT8Zk9Xl, uintU0McyPJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITtphp2dS = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQzKzCaa = BigInt("861")
		const addressDowZgWh = accounts[2]
		const uintnEd8aUL = BigInt("207")
		const addressDRBMX3I = "0x0000000000000000000000000000000000000001"
		const addressgjNKMu1 = accounts[0]
		const addressHilGvp3 = accounts[4]
		const addressYc1VZb6 = accounts[2]
		const boolh2hHskz = await RITtphp2dS.transfer.call(addressDowZgWh, uintQzKzCaa, {from: accounts[1]});
		const boolOqx0xJ7 = await RITtphp2dS.transferFrom.call(addressgjNKMu1, addressDRBMX3I, uintnEd8aUL, {from: accounts[3]});
		const uint256YUB04D = await RITtphp2dS.totalSupply.call({from: accounts[4]});
		const uint256yjg4wqd = await RITtphp2dS.allowance.call(addressYc1VZb6, addressHilGvp3, {from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RITIIABhXL = await RIT.new({from: accounts[4]});
		const uintezPDaUf = BigInt("1627")
		const address35XCWE = accounts[1]
		const uintgldVIT = BigInt("636")
		const uintKpYIrmL = BigInt("1107")
		const addressn8jbiRp = accounts[2]
		const booljIOKAa1 = await RITIIABhXL.approve.call(address35XCWE, uintezPDaUf, {from: accounts[0]});
//		const uint256MQ77S6m = await RITIIABhXL._burn.call(uintgldVIT, {from: accounts[3]});
//		const boolfdpDczq = await RITIIABhXL.approve.call(addressn8jbiRp, uintKpYIrmL, {from: accounts[3]});

		assert.equal(booljIOKAa1, true)
		await expect(RITIIABhXL._burn.call(uintgldVIT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITrrhQEI5 = await RIT.new({from: accounts[2]});
		const uintNr49tVX = BigInt("1420")
		const addresslNfwRhf = accounts[2]
		const addressC9IhFBm = accounts[1]
		const uintnYGVdSU = BigInt("1297")
		const addresswRlibIW = accounts[2]
		const boolkUSeGeV = await RITrrhQEI5.increaseAllowance.call(addresslNfwRhf, uintNr49tVX, {from: accounts[1]});
		const uint256wuE6Vuj = await RITrrhQEI5.balanceOf.call(addressC9IhFBm, {from: accounts[4]});
		const uint256tYyZ7oE = await RITrrhQEI5.totalSupply.call({from: accounts[2]});
		const stringhoo61jW = await RITrrhQEI5.name.call({from: accounts[5]});
//		const boolTPCpJhw = await RITrrhQEI5.transfer.call(addresswRlibIW, uintnYGVdSU, {from: accounts[0]});

		assert.equal(boolkUSeGeV, true)
		assert.equal(stringhoo61jW, "Real Estate Investment Token")
		assert.equal(uint256tYyZ7oE, BigInt("500000000000000000000000000"))
		assert.equal(uint256wuE6Vuj, BigInt("0"))
		await expect(RITrrhQEI5.transfer.call(addresswRlibIW, uintnYGVdSU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITblRXQy = await RIT.new({from: accounts[4]});
		const uintQOpfRQq = BigInt("1764")
		const addressTNo1FRf = "0x0000000000000000000000000000000000000000"
		const addresslReDlZy = accounts[1]
		const uint8NqRpLaS = await RITblRXQy.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringw9tbjZw = await RITblRXQy.name.call({from: accounts[1]});
//		const boolh69ypRC = await RITblRXQy.transferFrom.call(addresslReDlZy, addressTNo1FRf, uintQOpfRQq, {from: accounts[1]});
//		const stringXdEFFlf = await RITblRXQy.name.call({from: accounts[5]});

		assert.equal(stringw9tbjZw, "Real Estate Investment Token")
		assert.equal(uint8NqRpLaS, BigInt("18"))
		await expect(RITblRXQy.transferFrom.call(addresslReDlZy, addressTNo1FRf, uintQOpfRQq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})