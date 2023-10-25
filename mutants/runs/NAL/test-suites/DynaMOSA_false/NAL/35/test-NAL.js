const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringZbb1knt = "L7SdeOMDFmOjlBYp9wk1OVcMI"
		const stringoKzbBjh = "Gf8udJmFIkJm1xF4bpvbF3UXMGrtbMzXBDRAjxvENCoHALkN9b78ltWByrGGZ3lFkM9IvmCcAbooLEpe9allFSH"
		const uintw55JA4e = BigInt("206")
		const NALuQfbX8y = await NAL.new(stringZbb1knt, stringoKzbBjh, uintw55JA4e, {from: accounts[3]});
		const addressClSJndh = accounts[0]
		const addressp2PQskM = accounts[3]
		const addressgdsWnw = accounts[1]
		const boolLIy0fE3 = await NALuQfbX8y.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressiloEZkE = await NALuQfbX8y.notFrozen.call(addressClSJndh, {from: accounts[3]});
		const uint256slFRUs0 = await NALuQfbX8y.allowance.call(addressgdsWnw, addressp2PQskM, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressaOUyCut = accounts[1]
		const addressRcVJbYQ = accounts[0]
		const uint9RPyBY = BigInt("209")
		const addressXcyAORT = accounts[5]
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressRcVJbYQ, addressaOUyCut, {from: "0x0000000000000000000000000000000000000001"});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressXcyAORT, uint9RPyBY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256kLUsK4L, BigInt("0"))
		await expect(NALbbCK9AR.unlock.call(addressXcyAORT, uint9RPyBY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALNZ8xWkv = await NAL.new({from: accounts[4]});
		const uintMKeZM2T = BigInt("1020")
		const addressCmgiMWN = "0x0000000000000000000000000000000000000001"
		const address5kuonY = accounts[4]
		const uintqbNhb7 = BigInt("820")
		const addressjO3h2wT = accounts[4]
		const addressv0qj2LU = "0x0000000000000000000000000000000000000001"
		const uinthUYycpD = BigInt("1838")
		const addressMJRp03W = accounts[2]
		const address4LPWV5 = accounts[2]
		const booleclDB0 = await NALNZ8xWkv.transferFrom.call(address5kuonY, addressCmgiMWN, uintMKeZM2T, {from: "0x0000000000000000000000000000000000000001"});
		const boolZ2rwoF9 = await NALNZ8xWkv.paused.call({from: accounts[0]});
		const booloQGNZh = await NALNZ8xWkv.transferFrom.call(addressv0qj2LU, addressjO3h2wT, uintqbNhb7, {from: accounts[2]});
		const boolRnMvP0T = await NALNZ8xWkv.decreaseAllowance.call(addressMJRp03W, uinthUYycpD, {from: accounts[0]});
		const boolmtX0JBo = await NALNZ8xWkv.isAdmin.call(address4LPWV5, {from: accounts[2]});

		await expect(NALNZ8xWkv.transferFrom.call(address5kuonY, addressCmgiMWN, uintMKeZM2T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const addressIarPVwo = accounts[0]
		const addressrYeBfC4 = accounts[4]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const uint256qvcv1Lt = await NALJDfR1sZ.balanceOf.call(addressIarPVwo, {from: accounts[2]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addressrYeBfC4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qvcv1Lt, BigInt("2000000000000000000000000000"))
		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.unfreezeAccount.call(addressrYeBfC4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBvWe2rH = await NAL.new({from: accounts[3]});
		const uintLdMmtqG = BigInt("2022")
		const uintYkStPMz = BigInt("1034")
		const addressrTDYcFZ = "0x0000000000000000000000000000000000000001"
		const uintLJpwddd = BigInt("737")
		const addressvbGbooL = accounts[3]
		const addresscxdc64q = accounts[3]
		const boolscvo1C = await NALBvWe2rH.transferWithLock.call(addressrTDYcFZ, uintYkStPMz, uintLdMmtqG, {from: accounts[3]});
		await NALBvWe2rH.onlyAdmin.call({from: accounts[3]});
		const boolbyozKTR = await NALBvWe2rH.transferFrom.call(addresscxdc64q, addressvbGbooL, uintLJpwddd, {from: accounts[1]});

		assert.equal(boolscvo1C, true)
		await expect(NALBvWe2rH.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintY1TLsh = BigInt("1796")
		const addressnSC868D = accounts[0]
		const uinthJXuzbh = BigInt("1853")
		const addressMxK6rk = accounts[4]
		const addressh4gtAlg = accounts[3]
		const uintHARymsK = BigInt("849")
		const uinte7VIWe = BigInt("1205")
		const addressjTFq0T3 = accounts[2]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addressnSC868D, uintY1TLsh, {from: accounts[1]});
		const boolsv1i1C = await NALbRdGvB1.transfer.call(addressMxK6rk, uinthJXuzbh, {from: accounts[1]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressh4gtAlg, {from: accounts[1]});
		const boolLkxOFIz = await NALbRdGvB1.transferWithLock.call(addressjTFq0T3, uinte7VIWe, uintHARymsK, {from: accounts[5]});

		assert.equal(boolsv1i1C, true)
		assert.equal(boolxV7lTuJ, true)
		await expect(NALbRdGvB1.removeAdmin.call(addressh4gtAlg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALF8f991a = await NAL.new({from: accounts[0]});
		const addressgthLGDf = accounts[5]
		const uintP2GMCDB = BigInt("429")
		const addressLu7hpyI = accounts[3]
		const uintZKAaXhi = BigInt("845")
		const addressX1kSW7N = accounts[4]
		const addressdSN30Q = "0x0000000000000000000000000000000000000001"
		const uintLySDXOh = BigInt("119")
		const addresshdz8cOT = accounts[3]
		const uint256iSEqbY = await NALF8f991a.totalSupply.call({from: accounts[3]});
		const address48XU3c = await NALF8f991a.notFrozen.call(addressgthLGDf, {from: accounts[0]});
		const booljsNROnY = await NALF8f991a.transfer.call(addressLu7hpyI, uintP2GMCDB, {from: accounts[1]});
		const boolWsqE8z = await NALF8f991a.decreaseAllowance.call(addressX1kSW7N, uintZKAaXhi, {from: accounts[4]});
		const uint256leYAnvy = await NALF8f991a.balanceOf.call(addressdSN30Q, {from: accounts[0]});
		const boollgBUD1e = await NALF8f991a.decreaseAllowance.call(addresshdz8cOT, uintLySDXOh, {from: accounts[3]});

		assert.equal(uint256iSEqbY, BigInt("2000000000000000000000000000"))
		await expect(NALF8f991a.notFrozen.call(addressgthLGDf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const uinttFpFMsj = BigInt("1378")
		const addressqUcaNm3 = accounts[4]
		const addressBIqNohI = accounts[1]
		const addresshObmorL = accounts[4]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const addressoWIATgX = await NALJDfR1sZ.burnFrom.call(addressqUcaNm3, uinttFpFMsj, {from: accounts[1]});
		const uint256qvcv1Lt = await NALJDfR1sZ.balanceOf.call(addressBIqNohI, {from: accounts[2]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addresshObmorL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.burnFrom.call(addressqUcaNm3, uinttFpFMsj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const uintnWwlg95 = BigInt("346")
		const addressYPGnt6z = accounts[0]
		const addressrhmGo6y = accounts[5]
		const uintsHDAIU = BigInt("505")
		const uintrzaiph9 = BigInt("352")
		const addressHRZ0MtL = accounts[5]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const uint256lQJRvZr = await NALJDfR1sZ.burn.call(uintnWwlg95, {from: accounts[4]});
		const uint256qvcv1Lt = await NALJDfR1sZ.balanceOf.call(addressYPGnt6z, {from: accounts[2]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addressrhmGo6y, {from: "0x0000000000000000000000000000000000000001"});
		const booluUqgqHZ = await NALJDfR1sZ.transferWithLock.call(addressHRZ0MtL, uintrzaiph9, uintsHDAIU, {from: accounts[3]});

		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.burn.call(uintnWwlg95, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintkiF6zoD = BigInt("1964")
		const addressEHC8rqN = accounts[2]
		const addresssd0HPg = accounts[1]
		const addressBVNu6bp = accounts[1]
		const uintoHJi5W = BigInt("86")
		const addressmy3FM1 = accounts[3]
		const addressytiMqz = accounts[0]
		const uintUqAq2o = BigInt("1398")
		const addressuFd5T9q = accounts[5]
		const boolNQfDS40 = await NALbbCK9AR.increaseAllowance.call(addressEHC8rqN, uintkiF6zoD, {from: accounts[0]});
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressBVNu6bp, addresssd0HPg, {from: "0x0000000000000000000000000000000000000001"});
		const boolkzs3Kd = await NALbbCK9AR.transferFrom.call(addressytiMqz, addressmy3FM1, uintoHJi5W, {from: accounts[2]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressuFd5T9q, uintUqAq2o, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNQfDS40, true)
		assert.equal(uint256kLUsK4L, BigInt("0"))
		await expect(NALbbCK9AR.transferFrom.call(addressytiMqz, addressmy3FM1, uintoHJi5W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintHbs5nxR = BigInt("1884")
		const addressJIH9SEW = accounts[4]
		const uintC4t4AW = BigInt("160")
		const addressRc2epkY = accounts[5]
		const uintpfa48BP = BigInt("1959")
		const addresstn3VnsL = accounts[5]
		const stringqomUqfe = await NALbbCK9AR.symbol.call({from: accounts[4]});
		const boolfdYk3mw = await NALbbCK9AR.approve.call(addressJIH9SEW, uintHbs5nxR, {from: accounts[0]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressRc2epkY, uintC4t4AW, {from: "0x0000000000000000000000000000000000000001"});
		const boolztjYp5C = await NALbbCK9AR.increaseAllowance.call(addresstn3VnsL, uintpfa48BP, {from: accounts[2]});

		assert.equal(boolfdYk3mw, true)
		assert.equal(stringqomUqfe, "NAL")
		await expect(NALbbCK9AR.unlock.call(addressRc2epkY, uintC4t4AW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintO10ciAl = BigInt("84")
		const addressUyjKQU3 = accounts[5]
		await NALbbCK9AR.renounceAdmin.call({from: accounts[2]});
		await NALbbCK9AR.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressUyjKQU3, uintO10ciAl, {from: "0x0000000000000000000000000000000000000001"});
		await NALbbCK9AR.whenNotPaused.call({from: accounts[0]});

		await expect(NALbbCK9AR.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALLC2vtlf = await NAL.new({from: accounts[3]});
		const addressCIRDLaj = accounts[1]
		const addressiqqi7fE = accounts[1]
		const uintdeLtbjZ = BigInt("1288")
		const addressYC9ZWZJ = accounts[5]
		const uint256v0C77GK = await NALLC2vtlf.balanceOf.call(addressCIRDLaj, {from: accounts[4]});
		const addressMmcnkD = await NALLC2vtlf.transferOwnership.call(addressiqqi7fE, {from: accounts[3]});
		const booletVIAbx = await NALLC2vtlf.transfer.call(addressYC9ZWZJ, uintdeLtbjZ, {from: accounts[1]});
		await NALLC2vtlf.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256v0C77GK, BigInt("0"))
		await expect(NALLC2vtlf.transfer.call(addressYC9ZWZJ, uintdeLtbjZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addresstZzbh6v = "0x0000000000000000000000000000000000000001"
		const uintwsplASR = BigInt("211")
		const addressIfbcYRE = accounts[5]
		const addresstL40KnQ = await NALbbCK9AR.addAdmin.call(addresstZzbh6v, {from: accounts[2]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressIfbcYRE, uintwsplASR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALbbCK9AR.unlock.call(addressIfbcYRE, uintwsplASR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uint12Y3Ny = BigInt("1136")
		const addresskGcGgj6 = "0x0000000000000000000000000000000000000001"
		const uintTND93tY = BigInt("1686")
		const addressfTEAob3 = accounts[4]
		const uintqYyV82s = BigInt("209")
		const addresscXCTPBS = accounts[5]
		const boolUmf6xzt = await NALbbCK9AR.decreaseAllowance.call(addresskGcGgj6, uint12Y3Ny, {from: accounts[4]});
		const boolpq8zqYx = await NALbbCK9AR.paused.call({from: accounts[2]});
		const boolhMXTgw2 = await NALbbCK9AR.approve.call(addressfTEAob3, uintTND93tY, {from: accounts[0]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addresscXCTPBS, uintqYyV82s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALbbCK9AR.decreaseAllowance.call(addresskGcGgj6, uint12Y3Ny, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const addressAuFWfH6 = accounts[4]
		const uintA0jDlR = BigInt("980")
		const addressXmhmAEY = accounts[2]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const booloBsGrCu = await NALJDfR1sZ.paused.call({from: accounts[4]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addressAuFWfH6, {from: "0x0000000000000000000000000000000000000001"});
		const boolo1E8RaH = await NALJDfR1sZ.unlock.call(addressXmhmAEY, uintA0jDlR, {from: accounts[4]});

		assert.equal(booloBsGrCu, false)
		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.unfreezeAccount.call(addressAuFWfH6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressNwyczuF = accounts[2]
		const uintEXSMtp = BigInt("2028")
		const addressSevaxzu = "0x0000000000000000000000000000000000000001"
		const uintBKsCVf6 = BigInt("204")
		const addressZ2EbvEq = accounts[5]
		const uint256yZpQiXl = await NALbbCK9AR.balanceOf.call(addressNwyczuF, {from: accounts[4]});
		const booldrjHyak = await NALbbCK9AR.transfer.call(addressSevaxzu, uintEXSMtp, {from: accounts[2]});
		const stringsFNNyi5 = await NALbbCK9AR.name.call({from: accounts[3]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressZ2EbvEq, uintBKsCVf6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldrjHyak, true)
		assert.equal(stringsFNNyi5, "Personal Token")
		assert.equal(uint256yZpQiXl, BigInt("2000000000000000000000000000"))
		await expect(NALbbCK9AR.unlock.call(addressZ2EbvEq, uintBKsCVf6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressGkreCjI = accounts[0]
		const uintkc9xTv = BigInt("231")
		const addressTcBCSDF = accounts[5]
		const boolDs4sMH = await NALbbCK9AR.unfreezeAccount.call(addressGkreCjI, {from: accounts[2]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressTcBCSDF, uintkc9xTv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALbbCK9AR.unfreezeAccount.call(addressGkreCjI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressuq0U8G = accounts[1]
		const uintGxVnLK0 = BigInt("2031")
		const addressS2tzWZM = "0x0000000000000000000000000000000000000001"
		const uintglvUmqB = BigInt("204")
		const addressQomqn3C = accounts[5]
		await NALbbCK9AR.pause.call({from: accounts[2]});
		const uint256yZpQiXl = await NALbbCK9AR.balanceOf.call(addressuq0U8G, {from: accounts[4]});
		const booldrjHyak = await NALbbCK9AR.transfer.call(addressS2tzWZM, uintGxVnLK0, {from: accounts[2]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressQomqn3C, uintglvUmqB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALbbCK9AR.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressgOHD4mR = accounts[1]
		const addressEYlGF2s = accounts[0]
		const uintXe3k4cS = BigInt("1881")
		const addressy7tpUXW = "0x0000000000000000000000000000000000000001"
		const uintJoiJvQs = BigInt("204")
		const addressctE0vl = accounts[5]
		const addressUmF2XPj = accounts[1]
		const addresssO146Cf = accounts[4]
		const uint256yZpQiXl = await NALbbCK9AR.balanceOf.call(addressgOHD4mR, {from: accounts[4]});
		const addressUgtUvsA = await NALbbCK9AR.upgradeTo.call(addressEYlGF2s, {from: accounts[2]});
		const booldrjHyak = await NALbbCK9AR.transfer.call(addressy7tpUXW, uintXe3k4cS, {from: accounts[2]});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressctE0vl, uintJoiJvQs, {from: "0x0000000000000000000000000000000000000001"});
		const addressNOkZZZ6 = await NALbbCK9AR.removeAdmin.call(addressUmF2XPj, {from: accounts[1]});
		const boolL1Jfy9E = await NALbbCK9AR.isAdmin.call(addresssO146Cf, {from: accounts[3]});

		assert.equal(booldrjHyak, true)
		assert.equal(uint256yZpQiXl, BigInt("0"))
		await expect(NALbbCK9AR.unlock.call(addressctE0vl, uintJoiJvQs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbM2c8wp = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uinticdtWro = BigInt("665")
		const addressvhKSpZC = accounts[4]
		const uintmLxJjlj = BigInt("501")
		const addressW0RGZph = "0x0000000000000000000000000000000000000001"
		const boolvUBThex = await NALbM2c8wp.decreaseAllowance.call(addressvhKSpZC, uinticdtWro, {from: accounts[2]});
		const boolCvq32yp = await NALbM2c8wp.increaseAllowance.call(addressW0RGZph, uintmLxJjlj, {from: accounts[2]});
		await NALbM2c8wp.whenNotPaused.call({from: accounts[4]});
	});
})