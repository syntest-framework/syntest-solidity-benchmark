const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOpKA4Ety = await FrogDAO.new({from: accounts[4]});
		const uintXwaF1fA = BigInt("655")
		const uintUBnpoRe = BigInt("1668")
		const uintf3si9Hr = BigInt("1501")
		const addressASpueDM = accounts[0]
		const uintIRsg2Ae = await FrogDAOpKA4Ety.safeSub.call(uintUBnpoRe, uintXwaF1fA, {from: accounts[5]});
		const boolcinOg44 = await FrogDAOpKA4Ety.transfer.call(addressASpueDM, uintf3si9Hr, {from: accounts[0]});
		const uint2JyWEd = await FrogDAOpKA4Ety.totalSupply.call({from: accounts[0]});

		assert.equal(uintIRsg2Ae, BigInt("1013"))
		await expect(FrogDAOpKA4Ety.transfer.call(addressASpueDM, uintf3si9Hr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOFH35jOn = await FrogDAO.new({from: accounts[4]});
		const uintmTQ92Vg = BigInt("885")
		const addressKRDAWM = accounts[4]
		const addressDqVXJ0o = accounts[3]
		const uintMDUJGsg = BigInt("940")
		const addressN4gqiDS = accounts[5]
		const uintg9JiB2 = BigInt("1113")
		const uintojdna1v = BigInt("452")
		const uintBiLPCfy = BigInt("62")
		const uintn8NcfLN = BigInt("206")
		const uintLjTbgwP = BigInt("148")
		const uintDsbdNv = BigInt("113")
		const uintAat2cNl = BigInt("983")
		const uintVCIjZAD = BigInt("491")
		const bool28RJA6 = await FrogDAOFH35jOn.transferFrom.call(addressDqVXJ0o, addressKRDAWM, uintmTQ92Vg, {from: accounts[2]});
		const booluYTHduq = await FrogDAOFH35jOn.transfer.call(addressN4gqiDS, uintMDUJGsg, {from: accounts[5]});
		const uintING2ovP = await FrogDAOFH35jOn.safeDiv.call(uintojdna1v, uintg9JiB2, {from: accounts[3]});
		const uintCwwmdmq = await FrogDAOFH35jOn.safeMul.call(uintn8NcfLN, uintBiLPCfy, {from: accounts[0]});
		const uintoDzt2Xm = await FrogDAOFH35jOn.safeSub.call(uintDsbdNv, uintLjTbgwP, {from: accounts[0]});
		const uintYxpUCB0 = await FrogDAOFH35jOn.safeDiv.call(uintVCIjZAD, uintAat2cNl, {from: accounts[4]});

		await expect(FrogDAOFH35jOn.transferFrom.call(addressDqVXJ0o, addressKRDAWM, uintmTQ92Vg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOaBNJvRs = await FrogDAO.new({from: accounts[1]});
		const addressr2EKujJ = accounts[5]
		const uintaaOMBij = BigInt("161")
		const uintEwALu7d = BigInt("1675")
		const uintXQDVPFb = BigInt("633")
		const uintK0GCeKp = BigInt("216")
		const uintAVT3rVe = await FrogDAOaBNJvRs.totalSupply.call({from: accounts[4]});
		const uintQkwsaCZ = await FrogDAOaBNJvRs.balanceOf.call(addressr2EKujJ, {from: accounts[3]});
		const uintS9Tsqxb = await FrogDAOaBNJvRs.totalSupply.call({from: accounts[2]});
		const uintKjvN7iw = await FrogDAOaBNJvRs.safeMul.call(uintEwALu7d, uintaaOMBij, {from: accounts[0]});
		const uintChfk5z1 = await FrogDAOaBNJvRs.safeAdd.call(uintK0GCeKp, uintXQDVPFb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintAVT3rVe, BigInt("1000000000000000000000000"))
		assert.equal(uintChfk5z1, BigInt("849"))
		assert.equal(uintKjvN7iw, BigInt("269675"))
		assert.equal(uintQkwsaCZ, BigInt("0"))
		assert.equal(uintS9Tsqxb, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOs1bG2yw = await FrogDAO.new({from: accounts[4]});
		const uintUiT5hYD = BigInt("412")
		const uintpsK4Rrx = BigInt("660")
		const uintyuFbyMw = BigInt("100")
		const uintPWxqpR = BigInt("1074")
		const uintle8i5r0 = await FrogDAOs1bG2yw.safeMul.call(uintpsK4Rrx, uintUiT5hYD, {from: accounts[1]});
		const uinty1HzITc = await FrogDAOs1bG2yw.safeDiv.call(uintPWxqpR, uintyuFbyMw, {from: accounts[0]});
		const uintKHdkOnt = await FrogDAOs1bG2yw.totalSupply.call({from: accounts[0]});

		assert.equal(uintKHdkOnt, BigInt("1000000000000000000000000"))
		assert.equal(uintle8i5r0, BigInt("271920"))
		assert.equal(uinty1HzITc, BigInt("10"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOKCjsVI9 = await FrogDAO.new({from: accounts[3]});
		const addressDJVghaq = accounts[0]
		const addressGITLTIW = accounts[0]
		const uintgegMtNY = BigInt("1567")
		const uintto0Hjz = BigInt("1608")
		const uintVUNWGD3 = await FrogDAOKCjsVI9.allowance.call(addressGITLTIW, addressDJVghaq, {from: accounts[2]});
		const uintHr0NTiy = await FrogDAOKCjsVI9.safeSub.call(uintto0Hjz, uintgegMtNY, {from: accounts[0]});
		const uintB3Owhzg = await FrogDAOKCjsVI9.totalSupply.call({from: accounts[1]});

		assert.equal(uintB3Owhzg, BigInt("1000000000000000000000000"))
		assert.equal(uintHr0NTiy, BigInt("41"))
		assert.equal(uintVUNWGD3, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOQeVtiHV = await FrogDAO.new({from: accounts[4]});
		const uintoX6yX7D = BigInt("1232")
		const addressSRUYrFo = accounts[1]
		const uintO0ieKaR = BigInt("750")
		const uint6p3Wlw = BigInt("220")
		const addressm3kBnux = accounts[4]
		const uintzB6FqSb = BigInt("1147")
		const addressExe2FiZ = accounts[4]
		const addressM41rMPr = accounts[0]
		const boolO1W4c2 = await FrogDAOQeVtiHV.approve.call(addressSRUYrFo, uintoX6yX7D, {from: accounts[3]});
		const uintNEZSot7 = await FrogDAOQeVtiHV.safeSub.call(uint6p3Wlw, uintO0ieKaR, {from: accounts[2]});
		const uinti6tn2eM = await FrogDAOQeVtiHV.balanceOf.call(addressm3kBnux, {from: accounts[3]});
		const uintxZ5BjF3 = await FrogDAOQeVtiHV.totalSupply.call({from: accounts[0]});
		const boolfPaIret = await FrogDAOQeVtiHV.transferFrom.call(addressM41rMPr, addressExe2FiZ, uintzB6FqSb, {from: accounts[3]});

		assert.equal(boolO1W4c2, true)
		await expect(FrogDAOQeVtiHV.safeSub.call(uint6p3Wlw, uintO0ieKaR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOCkdsnI2 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvZYc1oT = accounts[0]
		const addressLTINn1G = "0x0000000000000000000000000000000000000001"
		const uintyhxW5Ay = BigInt("1624")
		const uintpHbDNdz = BigInt("551")
		const addressewJOKm9 = accounts[2]
		const addressgC4MuPj = "0x0000000000000000000000000000000000000001"
		const uintjSQXlm = await FrogDAOCkdsnI2.allowance.call(addressLTINn1G, addressvZYc1oT, {from: accounts[4]});
		const uinteF6i7l3 = await FrogDAOCkdsnI2.safeDiv.call(uintpHbDNdz, uintyhxW5Ay, {from: accounts[4]});
		const uintd1HmyCd = await FrogDAOCkdsnI2.allowance.call(addressgC4MuPj, addressewJOKm9, {from: accounts[3]});
	});
})