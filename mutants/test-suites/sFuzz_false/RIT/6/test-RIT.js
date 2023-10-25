const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITR3hplO = await RIT.new({from: accounts[4]});
		const addressXerzN7J = accounts[4]
		const addressKFf9n4Y = accounts[2]
		const uinttkAFCtW = BigInt("191")
		const addressa3CFkU0 = accounts[0]
		const uintUd9yWu = BigInt("362")
		const addressgVjdfh = accounts[3]
		const uinthiEOnTy = BigInt("544")
		const addressFZ766Va = accounts[2]
		const uint256tAR9a5C = await RITR3hplO.allowance.call(addressKFf9n4Y, addressXerzN7J, {from: accounts[4]});
		const boolqTKtJp = await RITR3hplO.increaseAllowance.call(addressa3CFkU0, uinttkAFCtW, {from: accounts[4]});
		const stringeyVFxD = await RITR3hplO.name.call({from: accounts[3]});
		const boolOGfMmMv = await RITR3hplO.increaseAllowance.call(addressgVjdfh, uintUd9yWu, {from: accounts[3]});
		const boolaL62gS5 = await RITR3hplO.approve.call(addressFZ766Va, uinthiEOnTy, {from: accounts[3]});

		assert.equal(boolOGfMmMv, true)
		assert.equal(boolaL62gS5, true)
		assert.equal(boolqTKtJp, true)
		assert.equal(stringeyVFxD, "Real Estate Investment Token")
		assert.equal(uint256tAR9a5C, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITvcfhLY7 = await RIT.new({from: accounts[0]});
		const uintlbgAlog = BigInt("575")
		const addressSr5SceG = accounts[1]
		const stringmiVgV7 = await RITvcfhLY7.name.call({from: accounts[0]});
//		const boolcAses80 = await RITvcfhLY7.decreaseAllowance.call(addressSr5SceG, uintlbgAlog, {from: accounts[2]});

		assert.equal(stringmiVgV7, "Real Estate Investment Token")
		await expect(RITvcfhLY7.decreaseAllowance.call(addressSr5SceG, uintlbgAlog, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RIThM0JCbh = await RIT.new({from: accounts[1]});
		const uintRt9VyjA = BigInt("1363")
		const addressTOVRzRf = accounts[1]
		const uintnF5HIp = BigInt("541")
		const addressSgPRlXR = accounts[4]
		const uintmPhC08C = BigInt("140")
		const uintpHk4RFs = BigInt("273")
		const address5I474U = accounts[3]
		const addressU89Wqny = accounts[3]
		const uint8VX8H84R = await RIThM0JCbh.decimals.call({from: accounts[2]});
//		const boollo5wclz = await RIThM0JCbh.transfer.call(addressTOVRzRf, uintRt9VyjA, {from: accounts[3]});
//		const booloJQtgiN = await RIThM0JCbh.increaseAllowance.call(addressSgPRlXR, uintnF5HIp, {from: accounts[2]});
//		const uint256MHkRFAj = await RIThM0JCbh._burn.call(uintmPhC08C, {from: accounts[0]});
//		const uint81nPipj = await RIThM0JCbh.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolgcEb6u = await RIThM0JCbh.transferFrom.call(addressU89Wqny, address5I474U, uintpHk4RFs, {from: accounts[0]});

		assert.equal(uint8VX8H84R, BigInt("18"))
		await expect(RIThM0JCbh.transfer.call(addressTOVRzRf, uintRt9VyjA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITArYRNRm = await RIT.new({from: accounts[4]});
		const addressezKuQkP = accounts[3]
		const uintq0DoGzF = BigInt("237")
		const addressSEXcWQT = accounts[3]
		const uintXDvIOdq = BigInt("689")
		const addressXNnFHH = accounts[4]
		const uint256a2pnTeN = await RITArYRNRm.balanceOf.call(addressezKuQkP, {from: accounts[3]});
		const boolQKACUCU = await RITArYRNRm.increaseAllowance.call(addressSEXcWQT, uintq0DoGzF, {from: accounts[3]});
		const stringDyRaQnO = await RITArYRNRm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolF7NGnT0 = await RITArYRNRm.increaseAllowance.call(addressXNnFHH, uintXDvIOdq, {from: accounts[4]});

		assert.equal(boolF7NGnT0, true)
		assert.equal(boolQKACUCU, true)
		assert.equal(stringDyRaQnO, "RIT 2.0")
		assert.equal(uint256a2pnTeN, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITQPfv5Jd = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintN0gH07 = BigInt("1690")
		const addressQMAT3ba = accounts[3]
		const uintPU1JxR = BigInt("497")
		const addressEGRbhOr = accounts[3]
		const boolvjGnRQd = await RITQPfv5Jd.approve.call(addressQMAT3ba, uintN0gH07, {from: "0x0000000000000000000000000000000000000001"});
		const boolcZ6Wwr = await RITQPfv5Jd.decreaseAllowance.call(addressEGRbhOr, uintPU1JxR, {from: accounts[0]});
		const stringnj1n5lk = await RITQPfv5Jd.symbol.call({from: accounts[1]});
		const uint8r2jY9k0 = await RITQPfv5Jd.decimals.call({from: accounts[3]});
		const uint8JB56FHX = await RITQPfv5Jd.decimals.call({from: accounts[4]});
	});

	it('test for RIT', async () => {
		const RITVzcpTfL = await RIT.new({from: accounts[1]});
		const addressgIQz726 = accounts[1]
		const uintMySapYP = BigInt("1966")
		const addressrQDa78P = accounts[3]
		const uint256xOqvzV = await RITVzcpTfL.totalSupply.call({from: accounts[4]});
		const uint256NSZulKg = await RITVzcpTfL.balanceOf.call(addressgIQz726, {from: accounts[4]});
		const boolPNmMhyW = await RITVzcpTfL.increaseAllowance.call(addressrQDa78P, uintMySapYP, {from: accounts[4]});

		assert.equal(boolPNmMhyW, true)
		assert.equal(uint256NSZulKg, BigInt("0"))
		assert.equal(uint256xOqvzV, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITvcfhLY7 = await RIT.new({from: accounts[0]});
		const uintbw4fn6B = BigInt("495")
		const uintuJ3TaA = BigInt("575")
		const addressGk95no0 = accounts[1]
//		const uint256zwOazI = await RITvcfhLY7._burn.call(uintbw4fn6B, {from: accounts[3]});
//		const stringmiVgV7 = await RITvcfhLY7.name.call({from: accounts[0]});
//		const boolcAses80 = await RITvcfhLY7.decreaseAllowance.call(addressGk95no0, uintuJ3TaA, {from: accounts[2]});

		await expect(RITvcfhLY7._burn.call(uintbw4fn6B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITvcfhLY7 = await RIT.new({from: accounts[0]});
		const uintpevLIrm = BigInt("1169")
		const addressXrFP1nJ = accounts[2]
		const addressjeJVQtK = accounts[4]
		const uintGUD2zpU = BigInt("582")
		const addresswoAzZ69 = accounts[1]
		const stringmiVgV7 = await RITvcfhLY7.name.call({from: accounts[0]});
//		const boolq9nO6xV = await RITvcfhLY7.transferFrom.call(addressjeJVQtK, addressXrFP1nJ, uintpevLIrm, {from: accounts[5]});
//		const boolcAses80 = await RITvcfhLY7.decreaseAllowance.call(addresswoAzZ69, uintGUD2zpU, {from: accounts[2]});

		assert.equal(stringmiVgV7, "Real Estate Investment Token")
		await expect(RITvcfhLY7.transferFrom.call(addressjeJVQtK, addressXrFP1nJ, uintpevLIrm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})