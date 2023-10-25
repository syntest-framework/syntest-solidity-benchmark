const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancehTocCXD = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintbcR70r2 = BigInt("148")
		const address5C0aGt = accounts[5]
		const addressb2LxiXZ = accounts[3]
		const addresszACAXUP = accounts[3]
		const addresscM75sk = accounts[2]
		const uint256ooV26Lz = await Straight_Fire_FinancehTocCXD.totalSupply.call({from: accounts[3]});
		const boolj3eY2QH = await Straight_Fire_FinancehTocCXD.transfer.call(address5C0aGt, uintbcR70r2, {from: accounts[1]});
		const uintzW0QBF9 = await Straight_Fire_FinancehTocCXD.allowance.call(addresszACAXUP, addressb2LxiXZ, {from: accounts[5]});
		const uint256uaB7hY5 = await Straight_Fire_FinancehTocCXD.balanceOf.call(addresscM75sk, {from: accounts[1]});

		assert.equal(boolj3eY2QH, false)
		assert.equal(uint256ooV26Lz, BigInt("80000000000000000000000"))
		assert.equal(uint256uaB7hY5, BigInt("0"))
		assert.equal(uintzW0QBF9, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceuL7l94C = await Straight_Fire_Finance.new({from: accounts[2]});
		const uint0Ber9w = BigInt("580")
		const addressj7PAGE = accounts[1]
		const addressgdp9sBm = accounts[2]
		const boolUvaekr = await Straight_Fire_FinanceuL7l94C.approve.call(addressj7PAGE, uint0Ber9w, {from: accounts[5]});
		const uint256m6IhxlI = await Straight_Fire_FinanceuL7l94C.balanceOf.call(addressgdp9sBm, {from: accounts[1]});

		assert.equal(boolUvaekr, true)
		assert.equal(uint256m6IhxlI, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancesWUIvWs = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintCAl4zE2 = BigInt("516")
		const address1UZ3KR = accounts[0]
		const addressAjbiBgk = accounts[4]
		const uintoznW89Y = BigInt("739")
		const addresstOlYNqj = accounts[1]
		const uintL010uew = BigInt("272")
		const addressOZq73S = accounts[2]
		const addressPK5mOaC = accounts[2]
		const addressscLJziD = accounts[3]
		const addressFYTvgyR = accounts[1]
		const addressYSBB5o = accounts[0]
		const boolbrCujrI = await Straight_Fire_FinancesWUIvWs.transferFrom.call(addressAjbiBgk, address1UZ3KR, uintCAl4zE2, {from: accounts[3]});
		const boolAzfKwSj = await Straight_Fire_FinancesWUIvWs.transfer.call(addresstOlYNqj, uintoznW89Y, {from: accounts[1]});
		const boolJGagAvD = await Straight_Fire_FinancesWUIvWs.transfer.call(addressOZq73S, uintL010uew, {from: accounts[0]});
		const uintW39OKZ = await Straight_Fire_FinancesWUIvWs.allowance.call(addressscLJziD, addressPK5mOaC, {from: accounts[1]});
		const uintRpPL8QQ = await Straight_Fire_FinancesWUIvWs.allowance.call(addressYSBB5o, addressFYTvgyR, {from: accounts[1]});

		assert.equal(boolAzfKwSj, false)
		assert.equal(boolJGagAvD, false)
		assert.equal(boolbrCujrI, false)
		assert.equal(uintRpPL8QQ, BigInt("0"))
		assert.equal(uintW39OKZ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancevTAfw4A = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAXMiwqS = BigInt("725")
		const addressStn4R62 = accounts[4]
		const addressls7jSgz = accounts[3]
		const addressYF9ILl8 = accounts[0]
		const addressLUig0E5 = accounts[1]
		const addressVKGWPVQ = accounts[5]
		const addressn4evCBG = accounts[2]
		const uintIPRrQJY = BigInt("1137")
		const addressi1361ev = accounts[1]
		const boolTIpr0f = await Straight_Fire_FinancevTAfw4A.transferFrom.call(addressls7jSgz, addressStn4R62, uintAXMiwqS, {from: accounts[0]});
		const uint256yaGsNS = await Straight_Fire_FinancevTAfw4A.balanceOf.call(addressYF9ILl8, {from: accounts[4]});
		const uintfGFrEk2 = await Straight_Fire_FinancevTAfw4A.allowance.call(addressVKGWPVQ, addressLUig0E5, {from: accounts[0]});
		const uint256IiJy62B = await Straight_Fire_FinancevTAfw4A.balanceOf.call(addressn4evCBG, {from: accounts[1]});
		const boolTgEbaxp = await Straight_Fire_FinancevTAfw4A.approve.call(addressi1361ev, uintIPRrQJY, {from: accounts[0]});
	});
})