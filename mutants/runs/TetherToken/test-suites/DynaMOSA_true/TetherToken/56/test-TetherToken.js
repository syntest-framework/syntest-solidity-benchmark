const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintyk9JxTV = BigInt("297")
		const stringS8YMMKJ = "WMESgLO3qNIgVmPWRm2PnzTWV6k8hDS2Rhk3vRY"
		const stringLqhVI1 = "PV0Rx832L3oAWevVwgmam2Ttlaymvk0Uw1sp2RurMaBPkN2sJUhnGwI4rYdEu"
		const uintuvPNFI8 = BigInt("1705")
		const TetherTokenjYmBL97 = await TetherToken.new(uintyk9JxTV, stringS8YMMKJ, stringLqhVI1, uintuvPNFI8, {from: accounts[2]});
		const uintYUmTllB = BigInt("491")
		const addressXvOwYM = accounts[2]
		const addresslp1ae7W = accounts[2]
		const addressQEu8PUQ = "0x0000000000000000000000000000000000000001"
		const uintbs0YzpF = BigInt("330")
		const addressNCDQNFM = accounts[2]
		const uintCiTAk5s = BigInt("2032")
		const uintuN9YQB = BigInt("1936")
		const addressStuXKBL = await TetherTokenjYmBL97.transferFrom.call(addresslp1ae7W, addressXvOwYM, uintYUmTllB, {from: accounts[3]});
		const addressyA6qxkV = await TetherTokenjYmBL97.deprecate.call(addressQEu8PUQ, {from: accounts[0]});
		const addressDrIa6QB = await TetherTokenjYmBL97.approve.call(addressNCDQNFM, uintbs0YzpF, {from: accounts[3]});
		const uintu57m4wY = await TetherTokenjYmBL97.redeem.call(uintCiTAk5s, {from: accounts[3]});
		const uintXtdwEx0 = await TetherTokenjYmBL97.issue.call(uintuN9YQB, {from: accounts[5]});

		await expect(TetherTokenjYmBL97.transferFrom.call(addresslp1ae7W, addressXvOwYM, uintYUmTllB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintgcz9TYG = BigInt("1877")
		const stringnTDm7yw = "crYvq6elFTeOcAuzgM9racqqhpYnjqlIjbB3TkLoLhHuCQWVcVtfDJ"
		const stringraIrpUW = "ZWKKVpP1XJvOa"
		const uintiMv3n7S = BigInt("294")
		const TetherTokenfqEyT1F = await TetherToken.new(uintgcz9TYG, stringnTDm7yw, stringraIrpUW, uintiMv3n7S, {from: accounts[2]});
		const uintx2y8xJw = BigInt("1750")
		const addressfbNdgil = accounts[3]
		const uintNEy2wMX = BigInt("670")
		const uintS8jF3m = BigInt("659")
		const uintAayUE0 = BigInt("1285")
		const uintV85z3CJ = BigInt("1778")
		const uintTZzj0BX = BigInt("1001")
		const uintE1T7VPU = BigInt("1825")
		const uintr0mLadM = BigInt("828")
		const uintl3157RG = BigInt("2019")
		const addressZUlwWIA = await TetherTokenfqEyT1F.approve.call(addressfbNdgil, uintx2y8xJw, {from: accounts[1]});
		const uintxNHD3wV = await TetherTokenfqEyT1F.redeem.call(uintNEy2wMX, {from: accounts[1]});
		const uinti9g2Frw = await TetherTokenfqEyT1F.setParams.call(uintAayUE0, uintS8jF3m, {from: accounts[2]});
		const uinttaf3hIU = await TetherTokenfqEyT1F.redeem.call(uintV85z3CJ, {from: accounts[3]});
		const uintAYIrL1g = await TetherTokenfqEyT1F.setParams.call(uintE1T7VPU, uintTZzj0BX, {from: accounts[4]});
		const uintKJ2dipq = await TetherTokenfqEyT1F.setParams.call(uintl3157RG, uintr0mLadM, {from: accounts[1]});

		await expect(TetherTokenfqEyT1F.redeem.call(uintNEy2wMX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintizkL8KD = BigInt("1659")
		const stringFchmLHB = "E19QdTs"
		const string9fVGDU = "KkjtG6b2QsmmtIfwuZTZj8M1uPsCYkRuSzjF8hdImENoiXK5BhCHrxFAE3ONpaLz6xgmcCKfuLiq9fkf"
		const uintGACjegB = BigInt("1511")
		const TetherTokenPm1jCqf = await TetherToken.new(uintizkL8KD, stringFchmLHB, string9fVGDU, uintGACjegB, {from: accounts[1]});
		const uintV9PVXlp = BigInt("289")
		const addressSqLvNUy = accounts[4]
		const uintYyalCXg = BigInt("1102")
		const addressBGaOXB = accounts[3]
		const addressNyqAjE0 = await TetherTokenPm1jCqf.approve.call(addressSqLvNUy, uintV9PVXlp, {from: accounts[4]});
		const uintAfvS5uP = await TetherTokenPm1jCqf.totalSupply.call({from: accounts[4]});
		const addressIZBu4JG = await TetherTokenPm1jCqf.approve.call(addressBGaOXB, uintYyalCXg, {from: accounts[1]});

		assert.equal(uintAfvS5uP, BigInt("1659"))
	});

	it('test for TetherToken', async () => {
		const uintC60iblx = BigInt("391")
		const stringUyYgX75 = "3KuswRwOQ3sDsNvkFa1Oee8s9Owza1sLBOVFEN8LdtBPxIevb"
		const stringFU2D9vF = "reSHMimLfaCw20eYBh2k9"
		const uintN0jDYVn = BigInt("1236")
		const TetherTokent4z0TRW = await TetherToken.new(uintC60iblx, stringUyYgX75, stringFU2D9vF, uintN0jDYVn, {from: accounts[3]});
		const addresscWau8E = accounts[0]
		const addresspPzGiQi = accounts[0]
		const uintszEfELI = BigInt("89")
		const addressKT3xJs = accounts[5]
		const addressHLN3ilx = "0x0000000000000000000000000000000000000001"
		const uintgME17jS = BigInt("738")
		const addressQq36bIh = accounts[1]
		const addresspkTcyV4 = accounts[2]
		const uint2y7hiX = await TetherTokent4z0TRW.allowance.call(addresspPzGiQi, addresscWau8E, {from: accounts[1]});
		const uintmEczES8 = await TetherTokent4z0TRW.redeem.call(uintszEfELI, {from: accounts[1]});
		const addressDWZVJqG = await TetherTokent4z0TRW.deprecate.call(addressKT3xJs, {from: accounts[0]});
		const uintRESpQ3 = await TetherTokent4z0TRW.balanceOf.call(addressHLN3ilx, {from: "0x0000000000000000000000000000000000000001"});
		const uintCBEccYO = await TetherTokent4z0TRW.redeem.call(uintgME17jS, {from: accounts[4]});
		const uintEVaZtI = await TetherTokent4z0TRW.allowance.call(addresspkTcyV4, addressQq36bIh, {from: accounts[0]});

		assert.equal(uint2y7hiX, BigInt("0"))
		await expect(TetherTokent4z0TRW.redeem.call(uintszEfELI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBjYEUfU = BigInt("1120")
		const stringwe9V1vq = "Yyf10ivYGxqFFRiNil6qbyP"
		const stringheLETDL = "LiJ2fjtANxta6FJrWklpy"
		const uintikgdZo9 = BigInt("1576")
		const TetherTokenkYaFcsY = await TetherToken.new(uintBjYEUfU, stringwe9V1vq, stringheLETDL, uintikgdZo9, {from: accounts[4]});
		const uintVgRUvXO = BigInt("1041")
		const addressic3Px0x = accounts[1]
		const uinttECFJQ = BigInt("867")
		const addressGWfyFO = accounts[3]
		const uintUHxmzL = BigInt("1048")
		const addressbIgZyNr = accounts[4]
		const addressvGYdtw = await TetherTokenkYaFcsY.transfer.call(addressic3Px0x, uintVgRUvXO, {from: accounts[2]});
		const addresskYNzP33 = await TetherTokenkYaFcsY.approve.call(addressGWfyFO, uinttECFJQ, {from: accounts[2]});
		const addresstXLfDSZ = await TetherTokenkYaFcsY.approve.call(addressbIgZyNr, uintUHxmzL, {from: accounts[4]});
		const uintx14O41 = await TetherTokenkYaFcsY.totalSupply.call({from: accounts[2]});

		await expect(TetherTokenkYaFcsY.transfer.call(addressic3Px0x, uintVgRUvXO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintEMG4VVN = BigInt("1011")
		const stringLw3Tyd8 = "9Q68UIRHbva5G3QdCUDJ3tnVrMPFuQcJXhLw6jdRtn"
		const stringOb4LNKL = "oa9iefoxt4oWStAXsLG77iCq4sUHOCPn0UehTJs6slylwTHYMP1ri2jq1iGM"
		const uintHyYmb6z = BigInt("1616")
		const TetherTokencbWADU = await TetherToken.new(uintEMG4VVN, stringLw3Tyd8, stringOb4LNKL, uintHyYmb6z, {from: "0x0000000000000000000000000000000000000001"});
		const addresshb7JmiJ = accounts[1]
		const uintY1w7so = BigInt("21")
		const addressCWHnsb3 = "0x0000000000000000000000000000000000000001"
		const addressbbyIsNh = accounts[4]
		const addressc2Pv8D = accounts[0]
		const uintRwxDK42 = BigInt("410")
		const addressbnhDx3s = accounts[0]
		const addressDXSULCo = accounts[2]
		const addressUjCW9z9 = await TetherTokencbWADU.deprecate.call(addresshb7JmiJ, {from: accounts[0]});
		const addressjIFBl2H = await TetherTokencbWADU.transferFrom.call(addressbbyIsNh, addressCWHnsb3, uintY1w7so, {from: accounts[5]});
		const uintGsCc8AI = await TetherTokencbWADU.balanceOf.call(addressc2Pv8D, {from: accounts[5]});
		const addressRCXmOKb = await TetherTokencbWADU.transferFrom.call(addressDXSULCo, addressbnhDx3s, uintRwxDK42, {from: accounts[5]});
	});

	it('test for TetherToken', async () => {
		const uintpylLW6t = BigInt("259")
		const stringUun8HP = "qQz7cPDJlkTVTTnr9HLHMPsqoEvw"
		const stringOXyiUda = "BuORQZ2CW2MFK8tLLdVwykk5zY3QTo5b7J8Xm6UrNxmCNQbICQ13aXWtFflti9zDxoHAS"
		const uintGqUz4eP = BigInt("1966")
		const TetherTokenOmi5w1d = await TetherToken.new(uintpylLW6t, stringUun8HP, stringOXyiUda, uintGqUz4eP, {from: accounts[4]});
		const uintpKibbwr = BigInt("1057")
		const uint6cdXPb = BigInt("1051")
		const uint9DGenZ = BigInt("1479")
		const uintO5PFnWB = BigInt("1057")
		const uintHg4iSfT = BigInt("100")
		const addressyJz1hnb = accounts[4]
		const uintHhr9xVM = await TetherTokenOmi5w1d.issue.call(uintpKibbwr, {from: accounts[3]});
		const uintf0Tl9J7 = await TetherTokenOmi5w1d.issue.call(uint6cdXPb, {from: accounts[1]});
		const uintAmTEsKR = await TetherTokenOmi5w1d.redeem.call(uint9DGenZ, {from: accounts[2]});
		const uint9oBvbl = await TetherTokenOmi5w1d.redeem.call(uintO5PFnWB, {from: accounts[0]});
		const addressnI44Jx = await TetherTokenOmi5w1d.transfer.call(addressyJz1hnb, uintHg4iSfT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenOmi5w1d.issue.call(uintpKibbwr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintulnXF9u = BigInt("207")
		const stringwUfQd4 = "eH6L5EcLCHdp"
		const stringhtqklHG = "STfehpbvzTQrCDKPmLyLnHAwiSN"
		const uintVEXJzM3 = BigInt("758")
		const TetherTokenqH2VoSr = await TetherToken.new(uintulnXF9u, stringwUfQd4, stringhtqklHG, uintVEXJzM3, {from: accounts[4]});
		const addressDuFzL6j = accounts[4]
		const addressjmfFBmm = accounts[3]
		const uintoOQQ5a = BigInt("1894")
		const addressl9Ge9nj = await TetherTokenqH2VoSr.deprecate.call(addressDuFzL6j, {from: accounts[2]});
		const addresssQcRaIP = await TetherTokenqH2VoSr.deprecate.call(addressjmfFBmm, {from: accounts[4]});
		const uinttwMY2fp = await TetherTokenqH2VoSr.redeem.call(uintoOQQ5a, {from: accounts[0]});

		await expect(TetherTokenqH2VoSr.deprecate.call(addressDuFzL6j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGhNFtsV = BigInt("259")
		const stringUun8HP = "qQz7cPDJlkTVTTnr9HLHMPsqoEvw"
		const stringOXyiUda = "BuORQZ2CW2MFK8tLLdVwykk5zY3QTo5b7J8Xm6UrNxmCNQbICQ13aXWtFflti9zDxoHAS"
		const uintJTtIcn5 = BigInt("1966")
		const TetherTokenOmi5w1d = await TetherToken.new(uintGhNFtsV, stringUun8HP, stringOXyiUda, uintJTtIcn5, {from: accounts[4]});
		const addressbqzpBZ = "0x0000000000000000000000000000000000000001"
		const uintqTwiF4b = BigInt("1057")
		const uintd2SGXik = BigInt("1479")
		const uintpG1iWOw = BigInt("1057")
		const uintWGYuqbX = BigInt("100")
		const addressOc4u0El = accounts[4]
		const addressStROKxQ = accounts[0]
		const uintLb0cxba = await TetherTokenOmi5w1d.balanceOf.call(addressbqzpBZ, {from: accounts[4]});
		const uintHhr9xVM = await TetherTokenOmi5w1d.issue.call(uintqTwiF4b, {from: accounts[3]});
		const uintAmTEsKR = await TetherTokenOmi5w1d.redeem.call(uintd2SGXik, {from: accounts[2]});
		const uint9oBvbl = await TetherTokenOmi5w1d.redeem.call(uintpG1iWOw, {from: accounts[0]});
		const addressnI44Jx = await TetherTokenOmi5w1d.transfer.call(addressOc4u0El, uintWGYuqbX, {from: "0x0000000000000000000000000000000000000001"});
		const addressQcYXLje = await TetherTokenOmi5w1d.deprecate.call(addressStROKxQ, {from: accounts[4]});

		assert.equal(uintLb0cxba, BigInt("0"))
		await expect(TetherTokenOmi5w1d.issue.call(uintqTwiF4b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintTVsJYGY = BigInt("207")
		const stringwUfQd4 = "eH6L5EcLCHdp"
		const stringhtqklHG = "STfehpbvzTQrCDKPmLyLnHAwiSN"
		const uintXqQSfqh = BigInt("758")
		const TetherTokenqH2VoSr = await TetherToken.new(uintTVsJYGY, stringwUfQd4, stringhtqklHG, uintXqQSfqh, {from: accounts[4]});
		const addressMNszMx6 = accounts[3]
		const uintenJiYwM = BigInt("1894")
		const addresssQcRaIP = await TetherTokenqH2VoSr.deprecate.call(addressMNszMx6, {from: accounts[4]});
		const uinttwMY2fp = await TetherTokenqH2VoSr.redeem.call(uintenJiYwM, {from: accounts[0]});

		await expect(TetherTokenqH2VoSr.redeem.call(uintenJiYwM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGQfikE3 = BigInt("1213")
		const stringKsu9qw = "bKyP3xufrNbmMkQbKNuc7SOy718sryPOwRV5E6L"
		const stringvXJsRli = "vVKp2ISsWXAgwuTp9kwqmUGP1V6riokOOh2XrdNYBEpxA9PThCucCTzc29c726gQAhzfNBAmbwpKYtXPNo9QDnkUXHcs4D"
		const uintoQxXFmx = BigInt("1055")
		const TetherTokenEh70XGa = await TetherToken.new(uintGQfikE3, stringKsu9qw, stringvXJsRli, uintoQxXFmx, {from: accounts[4]});
		const uintp0LMji = BigInt("1560")
		const uintOaUlOP4 = BigInt("1018")
		const uintriYCUu3 = BigInt("944")
		const address2xU668 = accounts[0]
		const uintvo92Soy = await TetherTokenEh70XGa.setParams.call(uintOaUlOP4, uintp0LMji, {from: accounts[3]});
		const uintUpicC76 = await TetherTokenEh70XGa.redeem.call(uintriYCUu3, {from: accounts[2]});
		const addressYUEBP4F = await TetherTokenEh70XGa.deprecate.call(address2xU668, {from: accounts[1]});

		await expect(TetherTokenEh70XGa.setParams.call(uintOaUlOP4, uintp0LMji, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintveNyfgE = BigInt("1427")
		const stringaFpcKQ = "UlReQ1QCyR3sjnQo7hciTXrkWOUv2D9Ql7cFi0nrKbTzWevo5Mo"
		const stringAFCuJFG = "jqYtMuIRlAG817827uWTT6fu1dgdB3d3KsoiaILpKAE0TGqIFryp1cMrmZEeaCDwORM8bTLjbD7Y"
		const uintCy8VtU = BigInt("1173")
		const TetherTokenTHuX1vI = await TetherToken.new(uintveNyfgE, stringaFpcKQ, stringAFCuJFG, uintCy8VtU, {from: accounts[3]});
		const uint34X9dd = BigInt("172")
		const addressFByMCRZ = accounts[2]
		const addressmEieVSo = accounts[4]
		const uintDn17ZM = BigInt("1301")
		const addressqfWOCbg = accounts[1]
		const uintFaxq4qx = await TetherTokenTHuX1vI.issue.call(uint34X9dd, {from: accounts[3]});
		const uintFtOv1xo = await TetherTokenTHuX1vI.allowance.call(addressmEieVSo, addressFByMCRZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressKwqhumy = await TetherTokenTHuX1vI.approve.call(addressqfWOCbg, uintDn17ZM, {from: accounts[4]});

		assert.equal(uintFtOv1xo, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintugtfKAQ = BigInt("317")
		const strings8rXkGt = "m85Yo9G8hwz8z8WUGpuCkmAkjfTdsqPFn7hqKkX79ysFORH7dYyISlPEMXkNqwCGlKyXz8hC8s5DYvO"
		const stringKWGLwJw = "e5LtZWKlRzFxjNge8BRFXueRBh7xqk0lNfruZuSEirMR4SPjRSl"
		const uintKouYPju = BigInt("67")
		const TetherTokena42jg8N = await TetherToken.new(uintugtfKAQ, strings8rXkGt, stringKWGLwJw, uintKouYPju, {from: accounts[0]});
		const uintrZoES1T = BigInt("637")
		const uintkmBfyTj = BigInt("431")
		const addressBaq8x4 = "0x0000000000000000000000000000000000000001"
		const addressGy2Gf9 = accounts[0]
		const uintXCLQipM = BigInt("904")
		const addressZwEXxxc = accounts[5]
		const addressN0t1g6 = accounts[4]
		const addressxdzPjt0 = accounts[1]
		const addressYyDlW2B = accounts[2]
		const address7tqSBR = accounts[1]
		const uintHt1EQF4 = await TetherTokena42jg8N.redeem.call(uintrZoES1T, {from: accounts[0]});
		const addressl6LBn8t = await TetherTokena42jg8N.transferFrom.call(addressGy2Gf9, addressBaq8x4, uintkmBfyTj, {from: "0x0000000000000000000000000000000000000001"});
		const addressJZZI3dm = await TetherTokena42jg8N.approve.call(addressZwEXxxc, uintXCLQipM, {from: accounts[3]});
		const uintyLKJ6Er = await TetherTokena42jg8N.allowance.call(addressxdzPjt0, addressN0t1g6, {from: accounts[4]});
		const uintvvzHI8Z = await TetherTokena42jg8N.allowance.call(address7tqSBR, addressYyDlW2B, {from: accounts[4]});

		await expect(TetherTokena42jg8N.redeem.call(uintrZoES1T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbZ1t0gk = BigInt("545")
		const stringCKsLGYY = "WUVvCKFvTvkiRnxY0LWIuitMWjghmoOiEypWee8GcAo1Q8WzlaGQPoeLhbPf"
		const stringKllMEH = "ZvULwJHh8JN5bZlQ5qT7PGoIreiBqazmW2Qh1IA2V9QR3GmflMzWV9movm"
		const uintpS5qItU = BigInt("1900")
		const TetherTokenJg9nJbt = await TetherToken.new(uintbZ1t0gk, stringCKsLGYY, stringKllMEH, uintpS5qItU, {from: accounts[0]});
		const uintlMZE6S2 = BigInt("221")
		const uintfNL4si = BigInt("277")
		const addressPbDlV4F = accounts[3]
		const addresssO4pwzS = accounts[0]
		const uintD25HPea = await TetherTokenJg9nJbt.redeem.call(uintlMZE6S2, {from: accounts[0]});
		const addressjpnsF5m = await TetherTokenJg9nJbt.transferFrom.call(addresssO4pwzS, addressPbDlV4F, uintfNL4si, {from: accounts[5]});

		await expect(TetherTokenJg9nJbt.transferFrom.call(addresssO4pwzS, addressPbDlV4F, uintfNL4si, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbvZxlsQ = BigInt("106")
		const stringNcQQgyp = "3DdHfP1zW5pqCqiKWTXn5SkA6WIMOjCev1RLPNKGsri4K8AsWfkmSHoEVkqSde9YGUGn62gM"
		const stringUARBQRE = "FplhJLe4bpbSNK0b13tKvi5hxmsixatxnuhzzmAuluH2lTBs"
		const uintcr5LUGM = BigInt("130")
		const TetherTokenXnbbHwT = await TetherToken.new(uintbvZxlsQ, stringNcQQgyp, stringUARBQRE, uintcr5LUGM, {from: accounts[1]});
		const uintPBUaTRU = BigInt("1569")
		const uintTDHE9NI = BigInt("1863")
		const addressTJlKL1n = accounts[1]
		const addressgR2UkwJ = accounts[0]
		const uintgatY9w = BigInt("326")
		const uintaH6408T = await TetherTokenXnbbHwT.setParams.call(uintTDHE9NI, uintPBUaTRU, {from: accounts[1]});
		const addressEkY4on = await TetherTokenXnbbHwT.deprecate.call(addressTJlKL1n, {from: accounts[4]});
		const uintotetAq0 = await TetherTokenXnbbHwT.balanceOf.call(addressgR2UkwJ, {from: accounts[0]});
		const uintM0acp7 = await TetherTokenXnbbHwT.redeem.call(uintgatY9w, {from: accounts[1]});

		await expect(TetherTokenXnbbHwT.setParams.call(uintTDHE9NI, uintPBUaTRU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})