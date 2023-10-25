const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const uintcuKSrTU = BigInt("890")
		const uint256ce6rLdv = await LedgistUI3MJv.afterTime.call(uintcuKSrTU, {from: "0x0000000000000000000000000000000000000001"});
		await LedgistUI3MJv.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256ce6rLdv, BigInt("1630232440"))
		await expect(LedgistUI3MJv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZQIbfCk = await Ledgis.new({from: accounts[0]});
		const addressWl7VxUK = accounts[2]
		const uint256RVVJ34E = await LedgisZQIbfCk.lockCount.call(addressWl7VxUK, {from: accounts[5]});
		await LedgisZQIbfCk.whenNotPaused.call({from: accounts[2]});
		await LedgisZQIbfCk.unpause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RVVJ34E, BigInt("0"))
		await expect(LedgisZQIbfCk.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgism6NC7fL = await Ledgis.new({from: accounts[4]});
		const uintouOgcdc = BigInt("409")
		const addressws91AnF = accounts[4]
		const uintCq5vgJ = BigInt("1250")
		const uintMOFQJo = BigInt("984")
		const addressR2RCWoM = "0x0000000000000000000000000000000000000001"
		const addressq4oralv = accounts[3]
		const boolf34WFG6 = await Ledgism6NC7fL.transfer.call(addressws91AnF, uintouOgcdc, {from: accounts[3]});
		const addressWjWKlpn = await Ledgism6NC7fL.lock.call(addressR2RCWoM, uintMOFQJo, uintCq5vgJ, {from: accounts[3]});
		await Ledgism6NC7fL.renounceOwnership.call({from: accounts[1]});
		await Ledgism6NC7fL.whenNotPaused.call({from: accounts[1]});
		const uint256Q4jm6E = await Ledgism6NC7fL.currentTime.call({from: accounts[3]});
		const boolPgw0T5i = await Ledgism6NC7fL.isFrozen.call(addressq4oralv, {from: accounts[4]});

		await expect(Ledgism6NC7fL.transfer.call(addressws91AnF, uintouOgcdc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRSOEJJI = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMxOyUdy = BigInt("366")
		const addressmEeE8YL = accounts[0]
		const uintXTmBhOQ = BigInt("748")
		const addressjd5u3yd = accounts[5]
		const uintgNWZrtc = BigInt("1370")
		const addressKtTAsb = await LedgisRSOEJJI.burn.call(addressmEeE8YL, uintMxOyUdy, {from: accounts[0]});
		await LedgisRSOEJJI.lockState.call(addressjd5u3yd, uintXTmBhOQ, {from: accounts[1]});
		await LedgisRSOEJJI.whenNotPaused.call({from: accounts[4]});
		const uint256ay6Or20 = await LedgisRSOEJJI.afterTime.call(uintgNWZrtc, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgisXqGbRPb = await Ledgis.new({from: accounts[3]});
		const uintpNOp9Nr = BigInt("221")
		const addressAO5KHEn = accounts[2]
		const addressktYguZr = accounts[0]
		const uintOj5jBn6 = BigInt("1575")
		const addressNic2APB = accounts[0]
		const addressQS82VtO = accounts[1]
		const addressvCzH9L = accounts[4]
		await LedgisXqGbRPb.renounceOwnership.call({from: accounts[2]});
		const boolMHfBUVM = await LedgisXqGbRPb.transferFrom.call(addressktYguZr, addressAO5KHEn, uintpNOp9Nr, {from: accounts[1]});
		const boolZePMW0n = await LedgisXqGbRPb.increaseAllowance.call(addressNic2APB, uintOj5jBn6, {from: accounts[0]});
		const addresswEMswmP = await LedgisXqGbRPb.freeze.call(addressQS82VtO, {from: accounts[1]});
		const uint256tErUARW = await LedgisXqGbRPb.balanceOf.call(addressvCzH9L, {from: accounts[0]});

		await expect(LedgisXqGbRPb.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNlQalUD = await Ledgis.new({from: accounts[1]});
		const uintVadliBq = BigInt("687")
		const addressGdiVee1 = accounts[3]
		const addressVAdKqe8 = accounts[1]
		const uint256tntw1Vp = await LedgisNlQalUD.totalSupply.call({from: accounts[1]});
		const addressqxRgEBs = await LedgisNlQalUD.burn.call(addressGdiVee1, uintVadliBq, {from: accounts[5]});
		await LedgisNlQalUD.unpause.call({from: accounts[2]});
		const addressGOyp9j2 = await LedgisNlQalUD.unfreeze.call(addressVAdKqe8, {from: accounts[1]});
		await LedgisNlQalUD.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256tntw1Vp, BigInt("10000000000000"))
		await expect(LedgisNlQalUD.burn.call(addressGdiVee1, uintVadliBq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const uintxpQZ0Hd = BigInt("890")
		const addressn1FQuIT = accounts[3]
		const addresso4zw7q8 = accounts[0]
		const uint256ce6rLdv = await LedgistUI3MJv.afterTime.call(uintxpQZ0Hd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rqis2Fg = await LedgistUI3MJv.allowance.call(addresso4zw7q8, addressn1FQuIT, {from: accounts[1]});
		await LedgistUI3MJv.whenPaused.call({from: accounts[0]});
		await LedgistUI3MJv.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256ce6rLdv, BigInt("1630232418"))
		assert.equal(uint256rqis2Fg, BigInt("0"))
		await expect(LedgistUI3MJv.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisl1ATOSW = await Ledgis.new({from: accounts[0]});
		const uintDbUHSW8 = BigInt("431")
		const addressJ2XGXfU = accounts[2]
		const addressZlHnP05 = accounts[0]
		const boolDfnD1dL = await Ledgisl1ATOSW.transferFrom.call(addressZlHnP05, addressJ2XGXfU, uintDbUHSW8, {from: accounts[2]});
		await Ledgisl1ATOSW.whenNotFrozen.call({from: accounts[3]});
		await Ledgisl1ATOSW.unpause.call({from: accounts[0]});

		await expect(Ledgisl1ATOSW.transferFrom.call(addressZlHnP05, addressJ2XGXfU, uintDbUHSW8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const uintVMuWZMK = BigInt("1420")
		const addressHojXKx = accounts[5]
		const boolxhCwDM = await LedgisZz5xgSv.increaseAllowance.call(addressHojXKx, uintVMuWZMK, {from: accounts[3]});
		await LedgisZz5xgSv.unpause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolxhCwDM, true)
		await expect(LedgisZz5xgSv.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const uintXgB7HrZ = BigInt("1420")
		const addresscl9f0oS = accounts[5]
		const address6U5Av1 = accounts[1]
		const boolxhCwDM = await LedgisZz5xgSv.increaseAllowance.call(addresscl9f0oS, uintXgB7HrZ, {from: accounts[3]});
		const uint256i1zI4x = await LedgisZz5xgSv.balanceOf.call(address6U5Av1, {from: accounts[4]});
		await LedgisZz5xgSv.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		await LedgisZz5xgSv.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolxhCwDM, true)
		assert.equal(uint256i1zI4x, BigInt("0"))
		await expect(LedgisZz5xgSv.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskddGaFz = await Ledgis.new({from: accounts[4]});
		const addressvg2KRpN = accounts[0]
		const uintddRukF = BigInt("1415")
		const addresstz8AzSA = accounts[0]
		const uintaTiBb3U = BigInt("1451")
		const addressRHaOlrA = accounts[3]
		const uintaiIsMfN = BigInt("1087")
		const addressgTJSRm7 = accounts[1]
		const uintMmQAEq1 = BigInt("1137")
		const addressLhwaESI = "0x0000000000000000000000000000000000000001"
		const uint256Tm6GdVW = await LedgiskddGaFz.balanceOf.call(addressvg2KRpN, {from: "0x0000000000000000000000000000000000000001"});
		const bool5E8tpb = await LedgiskddGaFz.decreaseAllowance.call(addresstz8AzSA, uintddRukF, {from: "0x0000000000000000000000000000000000000001"});
		const boolQNZtEVQ = await LedgiskddGaFz.transfer.call(addressRHaOlrA, uintaTiBb3U, {from: accounts[3]});
		const booltl2Mb5g = await LedgiskddGaFz.increaseAllowance.call(addressgTJSRm7, uintaiIsMfN, {from: accounts[2]});
		const boolk0PQvOy = await LedgiskddGaFz.mint.call(addressLhwaESI, uintMmQAEq1, {from: accounts[3]});

		assert.equal(uint256Tm6GdVW, BigInt("0"))
		await expect(LedgiskddGaFz.decreaseAllowance.call(addresstz8AzSA, uintddRukF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const uintZUh8fY9 = BigInt("1420")
		const addressoIcvxxb = accounts[5]
		const addressX66gDk6 = accounts[2]
		const uintcFka0E = BigInt("723")
		const uintieh5Ba = BigInt("1218")
		const addressUxlU1fv = accounts[2]
		const uintYJNyHjh = BigInt("1919")
		const uintTSxj5eK = BigInt("1256")
		const addressggJgjU = accounts[3]
		const uintko28Me2 = BigInt("451")
		const addressRui9IwF = accounts[0]
		const boolxhCwDM = await LedgisZz5xgSv.increaseAllowance.call(addressoIcvxxb, uintZUh8fY9, {from: accounts[3]});
		const uint256i1zI4x = await LedgisZz5xgSv.balanceOf.call(addressX66gDk6, {from: accounts[4]});
		const addressy00MnsH = await LedgisZz5xgSv.lock.call(addressUxlU1fv, uintieh5Ba, uintcFka0E, {from: accounts[0]});
		const addressj8ppNP = await LedgisZz5xgSv.lockAfter.call(addressggJgjU, uintTSxj5eK, uintYJNyHjh, {from: accounts[5]});
		const boolwm3w1Ay = await LedgisZz5xgSv.transfer.call(addressRui9IwF, uintko28Me2, {from: accounts[5]});
		await LedgisZz5xgSv.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolxhCwDM, true)
		assert.equal(uint256i1zI4x, BigInt("0"))
		await expect(LedgisZz5xgSv.lock.call(addressUxlU1fv, uintieh5Ba, uintcFka0E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const addresszJNEFTV = accounts[2]
		const uintoifuGql = BigInt("1627")
		const addressqVa7LSH = accounts[3]
		const uint256Z5wSrZD = await LedgisZz5xgSv.currentTime.call({from: accounts[0]});
		await LedgisZz5xgSv.onlyOwner.call({from: accounts[1]});
		const addressbeQeBiB = await LedgisZz5xgSv.freeze.call(addresszJNEFTV, {from: accounts[4]});
		const boolqaObZA2 = await LedgisZz5xgSv.increaseAllowance.call(addressqVa7LSH, uintoifuGql, {from: accounts[0]});

		assert.equal(uint256Z5wSrZD, BigInt("1630231539"))
		await expect(LedgisZz5xgSv.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscMhfTro = await Ledgis.new({from: accounts[2]});
		const addressURI71p8 = accounts[0]
		const uintahs1b70 = BigInt("1184")
		const addressMLUCaTo = accounts[4]
		const uintxyRB6W = BigInt("1738")
		const addressQIDsAJs = accounts[0]
		const uint256Ge3b0PY = await LedgiscMhfTro.balanceOf.call(addressURI71p8, {from: accounts[1]});
		const addressMR9r1GU = await LedgiscMhfTro.unlock.call(addressMLUCaTo, uintahs1b70, {from: accounts[2]});
		await LedgiscMhfTro.whenPaused.call({from: accounts[2]});
		const uint256DjkXB6T = await LedgiscMhfTro.afterTime.call(uintxyRB6W, {from: accounts[0]});
		const addressHJUhXg3 = await LedgiscMhfTro.transferOwnership.call(addressQIDsAJs, {from: accounts[1]});

		assert.equal(uint256Ge3b0PY, BigInt("0"))
		await expect(LedgiscMhfTro.unlock.call(addressMLUCaTo, uintahs1b70, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscMhfTro = await Ledgis.new({from: accounts[2]});
		const addressEsrkOVU = accounts[0]
		const uintFUGKOe = BigInt("1282")
		const addressaNXe06 = accounts[1]
		const uintpK06kTY = BigInt("1184")
		const addressiVxql32 = accounts[4]
		const uintV7MzPCH = BigInt("1738")
		const addressUAPHzCa = accounts[0]
		const uint256Ge3b0PY = await LedgiscMhfTro.balanceOf.call(addressEsrkOVU, {from: accounts[1]});
		const bools5GWVEJ = await LedgiscMhfTro.approve.call(addressaNXe06, uintFUGKOe, {from: accounts[5]});
		const addressMR9r1GU = await LedgiscMhfTro.unlock.call(addressiVxql32, uintpK06kTY, {from: accounts[2]});
		await LedgiscMhfTro.whenPaused.call({from: accounts[2]});
		const uint256DjkXB6T = await LedgiscMhfTro.afterTime.call(uintV7MzPCH, {from: accounts[0]});
		const addressHJUhXg3 = await LedgiscMhfTro.transferOwnership.call(addressUAPHzCa, {from: accounts[1]});

		assert.equal(bools5GWVEJ, true)
		assert.equal(uint256Ge3b0PY, BigInt("0"))
		await expect(LedgiscMhfTro.unlock.call(addressiVxql32, uintpK06kTY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const uintQ5nKXZ1 = BigInt("1020")
		const addressJk4jJoH = accounts[0]
		const uintyCwcMwm = BigInt("1884")
		const addresssW98hkT = "0x0000000000000000000000000000000000000001"
		const addressbfeqMJ7 = await LedgisZz5xgSv.burn.call(addressJk4jJoH, uintQ5nKXZ1, {from: accounts[0]});
		const boolm48LBH = await LedgisZz5xgSv.transfer.call(addresssW98hkT, uintyCwcMwm, {from: accounts[4]});

		await expect(LedgisZz5xgSv.transfer.call(addresssW98hkT, uintyCwcMwm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const address5x8HD3 = accounts[3]
		const addressRpHM2eC = accounts[2]
		const uintQecYgyt = BigInt("581")
		const addressY2PDA6N = accounts[0]
		const uint256q2mGBJm = await LedgistUI3MJv.balanceOf.call(address5x8HD3, {from: accounts[4]});
		const booltvRiXwA = await LedgistUI3MJv.isFrozen.call(addressRpHM2eC, {from: accounts[1]});
		const boolhfWxeY0 = await LedgistUI3MJv.mint.call(addressY2PDA6N, uintQecYgyt, {from: accounts[1]});

		assert.equal(booltvRiXwA, false)
		assert.equal(uint256q2mGBJm, BigInt("0"))
		await expect(LedgistUI3MJv.mint.call(addressY2PDA6N, uintQecYgyt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const addresssJqRpPA = accounts[2]
		const uintNtDioZ = BigInt("634")
		const addressjeBn7C7 = accounts[1]
		const addressbPP588Z = accounts[5]
		const uintSLHbVvT = BigInt("1873")
		const addressQ4Gmzj5 = "0x0000000000000000000000000000000000000001"
		const uint256q2mGBJm = await LedgistUI3MJv.balanceOf.call(addresssJqRpPA, {from: accounts[4]});
		await LedgistUI3MJv.lockState.call(addressjeBn7C7, uintNtDioZ, {from: accounts[1]});
		await LedgistUI3MJv.whenPaused.call({from: accounts[4]});
		const addressmJr7AVs = await LedgistUI3MJv.transferOwnership.call(addressbPP588Z, {from: accounts[1]});
		const addressB0VhnVq = await LedgistUI3MJv.burn.call(addressQ4Gmzj5, uintSLHbVvT, {from: "0x0000000000000000000000000000000000000001"});
		await LedgistUI3MJv.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256q2mGBJm, BigInt("0"))
		await expect(LedgistUI3MJv.lockState.call(addressjeBn7C7, uintNtDioZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const addresszXpnibt = accounts[1]
		const addressdLSv9Nw = accounts[0]
		const uintq4Dwi6Q = BigInt("1899")
		const addresszUCN9or = accounts[2]
		const addressgwSTxm = accounts[1]
		const uintqcdJzvD = BigInt("1899")
		const addressBgcRbnY = "0x0000000000000000000000000000000000000001"
		const boolTP80Bug = await LedgisZz5xgSv.isFrozen.call(addresszXpnibt, {from: accounts[4]});
		const addressYz4WfQP = await LedgisZz5xgSv.freeze.call(addressdLSv9Nw, {from: accounts[0]});
		const boolN56hSu3 = await LedgisZz5xgSv.transferFrom.call(addressgwSTxm, addresszUCN9or, uintq4Dwi6Q, {from: accounts[1]});
		const boolm48LBH = await LedgisZz5xgSv.transfer.call(addressBgcRbnY, uintqcdJzvD, {from: accounts[4]});

		assert.equal(boolTP80Bug, false)
		await expect(LedgisZz5xgSv.transferFrom.call(addressgwSTxm, addresszUCN9or, uintq4Dwi6Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvRaFTSV = await Ledgis.new({from: accounts[2]});
		const addresscggbtl6 = accounts[1]
		const addressUfNtW0X = accounts[3]
		const uintJef2ULM = BigInt("801")
		const addressKYhhDTG = accounts[3]
		const uintLvyqviJ = BigInt("1873")
		const uintENNqI1z = BigInt("21")
		const addressn55Rb91 = "0x0000000000000000000000000000000000000001"
		const addressusAi3Gi = "0x0000000000000000000000000000000000000001"
		const uint256y7awO4o = await LedgisvRaFTSV.balanceOf.call(addresscggbtl6, {from: accounts[0]});
		const addressOgFLn1 = await LedgisvRaFTSV.freeze.call(addressUfNtW0X, {from: accounts[2]});
		const boolCxKW5S = await LedgisvRaFTSV.mint.call(addressKYhhDTG, uintJef2ULM, {from: accounts[2]});
		const addresssbnaDF = await LedgisvRaFTSV.lockAfter.call(addressn55Rb91, uintENNqI1z, uintLvyqviJ, {from: accounts[4]});
		const uint256kRTqsVa = await LedgisvRaFTSV.balanceOf.call(addressusAi3Gi, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisvRaFTSV.whenNotFrozen.call({from: accounts[5]});

		assert.equal(boolCxKW5S, true)
		assert.equal(uint256y7awO4o, BigInt("0"))
		await expect(LedgisvRaFTSV.lockAfter.call(addressn55Rb91, uintENNqI1z, uintLvyqviJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUwSWYnp = await Ledgis.new({from: accounts[1]});
		const uint256z9GnDgu = await LedgisUwSWYnp.currentTime.call({from: accounts[1]});
		await LedgisUwSWYnp.pause.call({from: accounts[1]});

		assert.equal(uint256z9GnDgu, BigInt("1630231537"))
		await expect(LedgisUwSWYnp.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const addressHmCYLrM = accounts[3]
		const uint3Fbcj6 = BigInt("2013")
		const addressksUjMCW = accounts[1]
		const uintXgCFVdA = BigInt("1899")
		const addressEYm1XdV = "0x0000000000000000000000000000000000000001"
		const uint256W5h3hlJ = await LedgisZz5xgSv.lockCount.call(addressHmCYLrM, {from: accounts[1]});
		await LedgisZz5xgSv.unpause.call({from: accounts[0]});
		const boolx4YB8o = await LedgisZz5xgSv.decreaseAllowance.call(addressksUjMCW, uint3Fbcj6, {from: accounts[2]});
		const boolm48LBH = await LedgisZz5xgSv.transfer.call(addressEYm1XdV, uintXgCFVdA, {from: accounts[4]});

		assert.equal(uint256W5h3hlJ, BigInt("0"))
		await expect(LedgisZz5xgSv.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const uintJwfy3ce = BigInt("417")
		const uinttD9Yd1L = BigInt("1678")
		const addressXDTMITe = accounts[0]
		const uintN8graez = BigInt("1895")
		const addressLtJdznj = accounts[1]
		const addressbEPSVT9 = accounts[2]
		const addressBR3dic = await LedgistUI3MJv.lockAfter.call(addressXDTMITe, uinttD9Yd1L, uintJwfy3ce, {from: accounts[0]});
		const boolr4ffKbC = await LedgistUI3MJv.transfer.call(addressLtJdznj, uintN8graez, {from: accounts[2]});
		const uint256q2mGBJm = await LedgistUI3MJv.balanceOf.call(addressbEPSVT9, {from: accounts[4]});

		await expect(LedgistUI3MJv.transfer.call(addressLtJdznj, uintN8graez, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZz5xgSv = await Ledgis.new({from: accounts[0]});
		const addressenHcMw1 = accounts[2]
		const uinti84Sxm3 = BigInt("1916")
		const addressQQWqaHF = "0x0000000000000000000000000000000000000001"
		const addresscEK1y52 = await LedgisZz5xgSv.unfreeze.call(addressenHcMw1, {from: accounts[0]});
		const boolm48LBH = await LedgisZz5xgSv.transfer.call(addressQQWqaHF, uinti84Sxm3, {from: accounts[4]});

		await expect(LedgisZz5xgSv.transfer.call(addressQQWqaHF, uinti84Sxm3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisqNRDaGq = await Ledgis.new({from: accounts[3]});
		const addressuLL29N = accounts[4]
		const addressm4Jhq3p = accounts[0]
		const addressoGwUlI = accounts[3]
		const uintmLsU6WO = BigInt("1825")
		const addresscWNHVaf = accounts[1]
		const uinteqq0M0t = BigInt("308")
		const addressCMCYaWp = accounts[2]
		const addresspHQEYU0 = "0x0000000000000000000000000000000000000001"
		const addresslfM66ZG = accounts[1]
		const addresseXQ1mO = accounts[4]
		const uintgm2iVy3 = BigInt("1530")
		const uintOJBdjx = BigInt("899")
		const addressl5u7xuH = accounts[4]
		const addressuXppfj = await LedgisqNRDaGq.transferOwnership.call(addressuLL29N, {from: accounts[3]});
		const uint256VjeVBmh = await LedgisqNRDaGq.allowance.call(addressoGwUlI, addressm4Jhq3p, {from: accounts[4]});
		const booltfy8CuE = await LedgisqNRDaGq.transfer.call(addresscWNHVaf, uintmLsU6WO, {from: accounts[0]});
		const boolI2aBX5T = await LedgisqNRDaGq.transferFrom.call(addresspHQEYU0, addressCMCYaWp, uinteqq0M0t, {from: accounts[5]});
		const uint256r2TYmph = await LedgisqNRDaGq.allowance.call(addresseXQ1mO, addresslfM66ZG, {from: accounts[4]});
		const boolh41Rdmv = await LedgisqNRDaGq.transferWithLockAfter.call(addressl5u7xuH, uintOJBdjx, uintgm2iVy3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VjeVBmh, BigInt("0"))
		await expect(LedgisqNRDaGq.transfer.call(addresscWNHVaf, uintmLsU6WO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscMhfTro = await Ledgis.new({from: accounts[2]});
		const uintAKDCTD = BigInt("1193")
		const addresskvSAxGl = accounts[5]
		await LedgiscMhfTro.renounceOwnership.call({from: accounts[2]});
		const addressMR9r1GU = await LedgiscMhfTro.unlock.call(addresskvSAxGl, uintAKDCTD, {from: accounts[2]});

		await expect(LedgiscMhfTro.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfH0jqvm = await Ledgis.new({from: accounts[5]});
		const uintS1OJ7OF = BigInt("1305")
		const uintOzFQMkE = BigInt("792")
		const addressPY2WYMN = accounts[0]
		const uintUVSIlz = BigInt("253")
		const uintUkTy4Tb = BigInt("1000")
		const addressyXCWPwW = accounts[3]
		const boolz4yZz9J = await LedgisfH0jqvm.transferWithLock.call(addressPY2WYMN, uintOzFQMkE, uintS1OJ7OF, {from: accounts[5]});
		const booldzC8ml4 = await LedgisfH0jqvm.transferWithLockAfter.call(addressyXCWPwW, uintUkTy4Tb, uintUVSIlz, {from: accounts[1]});
		const uint256BWDwxl = await LedgisfH0jqvm.currentTime.call({from: accounts[4]});

		assert.equal(boolz4yZz9J, true)
		await expect(LedgisfH0jqvm.transferWithLockAfter.call(addressyXCWPwW, uintUkTy4Tb, uintUVSIlz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistUI3MJv = await Ledgis.new({from: accounts[0]});
		const addressgTl3FHD = accounts[3]
		const addresskvlHypG = accounts[4]
		const uintGBb1EQ = BigInt("603")
		const uintKd9oON = BigInt("1859")
		const addressnoZhEng = accounts[4]
		const uint256q2mGBJm = await LedgistUI3MJv.balanceOf.call(addressgTl3FHD, {from: accounts[4]});
		const uint256hCajvKp = await LedgistUI3MJv.currentTime.call({from: accounts[1]});
		const uint256hQn1zMP = await LedgistUI3MJv.balanceOf.call(addresskvlHypG, {from: accounts[1]});
		const boolff6KoN = await LedgistUI3MJv.transferWithLockAfter.call(addressnoZhEng, uintKd9oON, uintGBb1EQ, {from: accounts[0]});

		assert.equal(boolff6KoN, true)
		assert.equal(uint256hCajvKp, BigInt("1630231548"))
		assert.equal(uint256hQn1zMP, BigInt("0"))
		assert.equal(uint256q2mGBJm, BigInt("0"))
	});
})