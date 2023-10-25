const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITREY37Ye = await RIT.new({from: accounts[1]});
		const uint3KpXAq = BigInt("1811")
		const addressCme6X2U = accounts[0]
		const uintjNqeVD = BigInt("1704")
		const addressBkX9KRA = accounts[2]
		const uintjZjvVCR = BigInt("1624")
		const boolnoij4EX = await RITREY37Ye.transfer.call(addressCme6X2U, uint3KpXAq, {from: accounts[0]});
		const boolecDJEfT = await RITREY37Ye.increaseAllowance.call(addressBkX9KRA, uintjNqeVD, {from: accounts[5]});
		const stringse11oc6 = await RITREY37Ye.name.call({from: accounts[2]});
		const uint8J2PrdkU = await RITREY37Ye.decimals.call({from: accounts[4]});
		const uint2568c5xkS = await RITREY37Ye._burn.call(uintjZjvVCR, {from: accounts[4]});

		await expect(RITREY37Ye.transfer.call(addressCme6X2U, uint3KpXAq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITNfzW0bN = await RIT.new({from: accounts[5]});
		const uintFTXUSrc = BigInt("106")
		const addressaHcIbjh = accounts[0]
		const addressXnbkfgS = accounts[4]
		const uint8KIp18u = await RITNfzW0bN.decimals.call({from: accounts[0]});
		const uint256TpTvUL5 = await RITNfzW0bN.totalSupply.call({from: accounts[1]});
		const stringcD6wtj3 = await RITNfzW0bN.symbol.call({from: accounts[3]});
		const boolMjuv4cz = await RITNfzW0bN.transferFrom.call(addressXnbkfgS, addressaHcIbjh, uintFTXUSrc, {from: accounts[4]});

		assert.equal(stringcD6wtj3, "RIT 2.0")
		assert.equal(uint256TpTvUL5, BigInt("500000000000000000000000000"))
		assert.equal(uint8KIp18u, BigInt("18"))
		await expect(RITNfzW0bN.transferFrom.call(addressXnbkfgS, addressaHcIbjh, uintFTXUSrc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzbgvbYa = await RIT.new({from: accounts[2]});
		const addresszPV3lGo = accounts[1]
		const addresso2Ej6Ao = accounts[0]
		const addresshbltS6o = accounts[3]
		const addressFwGV3No = accounts[1]
		const uint8IeS1fwc = await RITzbgvbYa.decimals.call({from: accounts[4]});
		const uint256r2CSsFG = await RITzbgvbYa.balanceOf.call(addresszPV3lGo, {from: accounts[1]});
		const uint8OSHTcNU = await RITzbgvbYa.decimals.call({from: accounts[2]});
		const uint256aX8gOyh = await RITzbgvbYa.allowance.call(addresshbltS6o, addresso2Ej6Ao, {from: accounts[5]});
		const uint256YG2U6SD = await RITzbgvbYa.balanceOf.call(addressFwGV3No, {from: accounts[0]});

		assert.equal(uint256YG2U6SD, BigInt("0"))
		assert.equal(uint256aX8gOyh, BigInt("0"))
		assert.equal(uint256r2CSsFG, BigInt("0"))
		assert.equal(uint8IeS1fwc, BigInt("18"))
		assert.equal(uint8OSHTcNU, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITxFleRIR = await RIT.new({from: accounts[4]});
		const addressydfclKD = accounts[1]
		const uintzjJjwQi = BigInt("1767")
		const addressMLIndv7 = accounts[3]
		const uint8Xx1654l = await RITxFleRIR.decimals.call({from: accounts[3]});
		const uint256AuY12qc = await RITxFleRIR.balanceOf.call(addressydfclKD, {from: accounts[3]});
		const booltdgxI7Q = await RITxFleRIR.increaseAllowance.call(addressMLIndv7, uintzjJjwQi, {from: accounts[3]});

		assert.equal(booltdgxI7Q, true)
		assert.equal(uint256AuY12qc, BigInt("0"))
		assert.equal(uint8Xx1654l, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITm2ywNVZ = await RIT.new({from: accounts[2]});
		const uint550Qqc = BigInt("1831")
		const addressaIjHImh = accounts[5]
		const uintx0a2Cbc = BigInt("723")
		const uints5Hs8b = BigInt("1583")
		const addressG93q3QJ = accounts[1]
		const uint81A4CbN = await RITm2ywNVZ.decimals.call({from: accounts[3]});
		const boolLJBLfDk = await RITm2ywNVZ.increaseAllowance.call(addressaIjHImh, uint550Qqc, {from: accounts[3]});
		const uint256PIW4R4h = await RITm2ywNVZ._burn.call(uintx0a2Cbc, {from: "0x0000000000000000000000000000000000000001"});
		const boolbaTc6kN = await RITm2ywNVZ.increaseAllowance.call(addressG93q3QJ, uints5Hs8b, {from: accounts[1]});

		assert.equal(boolLJBLfDk, true)
		assert.equal(uint81A4CbN, BigInt("18"))
		await expect(RITm2ywNVZ._burn.call(uintx0a2Cbc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxtgY3hx = await RIT.new({from: accounts[1]});
		const uintIeRj7Ia = BigInt("317")
		const addressIBiMmyT = accounts[1]
		const addressXK6eNiR = accounts[2]
		const stringRoVdIU9 = await RITxtgY3hx.name.call({from: accounts[3]});
		const boolhtPxCh3 = await RITxtgY3hx.transferFrom.call(addressXK6eNiR, addressIBiMmyT, uintIeRj7Ia, {from: accounts[1]});
		const uint8G5udWR9 = await RITxtgY3hx.decimals.call({from: accounts[0]});

		assert.equal(stringRoVdIU9, "Real Estate Investment Token")
		await expect(RITxtgY3hx.transferFrom.call(addressXK6eNiR, addressIBiMmyT, uintIeRj7Ia, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITnuQEMRZ = await RIT.new({from: accounts[2]});
		const uint3FnTrm = BigInt("1106")
		const addressLlIyHjt = accounts[4]
		const uintScM9CZp = BigInt("1162")
		const addressP8snCLv = "0x0000000000000000000000000000000000000001"
		const uint256iAaVwZM = await RITnuQEMRZ.totalSupply.call({from: accounts[4]});
		const boolJW62yMk = await RITnuQEMRZ.approve.call(addressLlIyHjt, uint3FnTrm, {from: accounts[0]});
		const booldI4CLCy = await RITnuQEMRZ.increaseAllowance.call(addressP8snCLv, uintScM9CZp, {from: accounts[0]});

		assert.equal(boolJW62yMk, true)
		assert.equal(booldI4CLCy, true)
		assert.equal(uint256iAaVwZM, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITxFleRIR = await RIT.new({from: accounts[4]});
		const uintqsnPwSn = BigInt("2025")
		const addressnyQG9Ij = accounts[2]
		const addresshCLl9Rl = accounts[2]
		const uintt30RtCY = BigInt("1767")
		const addressomp6qD = accounts[3]
		const boolZJHx00 = await RITxFleRIR.decreaseAllowance.call(addressnyQG9Ij, uintqsnPwSn, {from: accounts[4]});
		const uint8Xx1654l = await RITxFleRIR.decimals.call({from: accounts[3]});
		const uint256AuY12qc = await RITxFleRIR.balanceOf.call(addresshCLl9Rl, {from: accounts[3]});
		const uint8KaXstSJ = await RITxFleRIR.decimals.call({from: accounts[1]});
		const booltdgxI7Q = await RITxFleRIR.increaseAllowance.call(addressomp6qD, uintt30RtCY, {from: accounts[3]});

		await expect(RITxFleRIR.decreaseAllowance.call(addressnyQG9Ij, uintqsnPwSn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITu9kzsv4 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK5mLGox = BigInt("451")
		const addressb2Zbq33 = accounts[4]
		const uintrxFZop = BigInt("1337")
		const addressuKP2woi = accounts[5]
		const uint8gKAX82w = await RITu9kzsv4.decimals.call({from: accounts[3]});
		const stringhdyTKP4 = await RITu9kzsv4.symbol.call({from: accounts[2]});
		const uint256Rh6p0P = await RITu9kzsv4._burn.call(uintK5mLGox, {from: accounts[1]});
		const uint256VjbeNoA = await RITu9kzsv4.balanceOf.call(addressb2Zbq33, {from: accounts[0]});
		const boolq4vxt0x = await RITu9kzsv4.decreaseAllowance.call(addressuKP2woi, uintrxFZop, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITnuQEMRZ = await RIT.new({from: accounts[2]});
		const addressjVD1jQx = accounts[1]
		const uintiZw9f3O = BigInt("1106")
		const addresst3DylSE = accounts[4]
		const uintHdddClx = BigInt("1162")
		const addressCOF9wL = "0x0000000000000000000000000000000000000000"
		const stringYP4jfpb = await RITnuQEMRZ.symbol.call({from: accounts[3]});
		const uint256iAaVwZM = await RITnuQEMRZ.totalSupply.call({from: accounts[4]});
		const uint256O6HkKqt = await RITnuQEMRZ.balanceOf.call(addressjVD1jQx, {from: accounts[1]});
		const boolJW62yMk = await RITnuQEMRZ.approve.call(addresst3DylSE, uintiZw9f3O, {from: accounts[0]});
		const booldI4CLCy = await RITnuQEMRZ.increaseAllowance.call(addressCOF9wL, uintHdddClx, {from: accounts[0]});

		assert.equal(boolJW62yMk, true)
		assert.equal(stringYP4jfpb, "RIT 2.0")
		assert.equal(uint256O6HkKqt, BigInt("0"))
		assert.equal(uint256iAaVwZM, BigInt("500000000000000000000000000"))
		await expect(RITnuQEMRZ.increaseAllowance.call(addressCOF9wL, uintHdddClx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})