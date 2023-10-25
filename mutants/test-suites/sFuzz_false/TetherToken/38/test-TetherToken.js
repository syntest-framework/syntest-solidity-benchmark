const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintvTBJHao = BigInt("1085")
		const stringyQeoDcJ = "6yJk7vGt2gllniCljQu9IM5OVsaH"
		const stringIbNMqf = "TymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck25RonQ6wpSHioC5qSVF8FCEGWj4"
		const uinta8HBPkZ = BigInt("1101")
		const TetherTokenIU4j5ry = await TetherToken.new(uintvTBJHao, stringyQeoDcJ, stringIbNMqf, uinta8HBPkZ, {from: accounts[4]});
		const address6ssKsI = accounts[3]
		const addressRa7W9m = accounts[2]
		const uintGCfdQPs = BigInt("592")
		const addressJJCTpw = accounts[1]
//		const addressJhm9Z9d = await TetherTokenIU4j5ry.deprecate.call(address6ssKsI, {from: accounts[0]});
//		const addressRaUFEi = await TetherTokenIU4j5ry.deprecate.call(addressRa7W9m, {from: accounts[5]});
//		const uintgZWfnjY = await TetherTokenIU4j5ry.issue.call(uintGCfdQPs, {from: accounts[2]});
//		const addressUQrPFNb = await TetherTokenIU4j5ry.deprecate.call(addressJJCTpw, {from: accounts[3]});

		await expect(TetherTokenIU4j5ry.deprecate.call(address6ssKsI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintX4qdyGZ = BigInt("246")
		const stringKrtybD1 = "waF4XmIINNmfJqVAOOPmBswseUq0cpf4IE3pmS9FliNmBrwOXXqckYWTcWmyANrcEhNYeU3"
		const stringINNpoY3 = "s43GMxuxDNY1fsRtVooFTkxqYUfv7MXYJ6v"
		const uinthzCJCuB = BigInt("1282")
		const TetherTokenJCWkbd9 = await TetherToken.new(uintX4qdyGZ, stringKrtybD1, stringINNpoY3, uinthzCJCuB, {from: accounts[1]});
		const uintJCb3S9s = BigInt("1603")
		const addressUsesqhv = accounts[4]
		const uintp3T3uC1 = BigInt("1273")
		const addressj1lOqvL = accounts[5]
		const addressykECy2T = accounts[2]
		const uintUTuGmOJ = BigInt("408")
		const uintFBZ85h = BigInt("1220")
		const uint0adFY4 = BigInt("1377")
		const addressWSCKhLi = accounts[3]
		const addressPEXLBjx = accounts[4]
		const addressWKuEeat = await TetherTokenJCWkbd9.approve.call(addressUsesqhv, uintJCb3S9s, {from: accounts[1]});
//		const uintcvUAzx = await TetherTokenJCWkbd9.issue.call(uintp3T3uC1, {from: accounts[4]});
//		const uinteMtOE4w = await TetherTokenJCWkbd9.allowance.call(addressykECy2T, addressj1lOqvL, {from: accounts[0]});
//		const uinto3Xaaes = await TetherTokenJCWkbd9.redeem.call(uintUTuGmOJ, {from: accounts[5]});
//		const uintOEaIsQt = await TetherTokenJCWkbd9.setParams.call(uint0adFY4, uintFBZ85h, {from: accounts[2]});
//		const uintXrtKebI = await TetherTokenJCWkbd9.allowance.call(addressPEXLBjx, addressWSCKhLi, {from: accounts[2]});

		await expect(TetherTokenJCWkbd9.issue.call(uintp3T3uC1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintEHijh4L = BigInt("1179")
		const string0XcwLP = "WDKnOtrlsmiFKQ5LoJuNEhNUM4LNdzrgmHZx3Sp7GHdreFujFPMKxgxrc6F54XDWQZVpYXahFSuZoSQ7F9iwJ2LTLdIM31"
		const stringld0Mmg3 = "OIBZMkae7AykicsAaqHWNR"
		const uintNQVto3o = BigInt("231")
		const TetherTokentzkuGm = await TetherToken.new(uintEHijh4L, string0XcwLP, stringld0Mmg3, uintNQVto3o, {from: accounts[3]});
		const uintWX6gGv = BigInt("413")
		const uintCKdAS9g = BigInt("741")
		const addressOPjBNHJ = accounts[5]
		const addressH5t5C5h = accounts[4]
		const addressrPwelZ = accounts[4]
		const uintcfiU4jT = await TetherTokentzkuGm.issue.call(uintWX6gGv, {from: accounts[3]});
//		const uintTD5CbqQ = await TetherTokentzkuGm.redeem.call(uintCKdAS9g, {from: accounts[4]});
//		const uintMrD4rq1 = await TetherTokentzkuGm.allowance.call(addressH5t5C5h, addressOPjBNHJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuIXuTvr = await TetherTokentzkuGm.balanceOf.call(addressrPwelZ, {from: accounts[0]});

		await expect(TetherTokentzkuGm.redeem.call(uintCKdAS9g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbkywN1H = BigInt("604")
		const stringk9ta7lG = "nGzTqaC0px2tTN"
		const stringqNGymg6 = "BkAt5vHCDX257hePjwbKE"
		const uintbtSZLGk = BigInt("945")
		const TetherTokenYajgShH = await TetherToken.new(uintbkywN1H, stringk9ta7lG, stringqNGymg6, uintbtSZLGk, {from: accounts[3]});
		const addressDZomQzr = accounts[0]
		const addressZdgSLTP = accounts[3]
		const uint1GktIx = BigInt("353")
		const addressxfeoasy = accounts[2]
		const address4g9TcW = accounts[0]
		const addresssn6LTWT = accounts[3]
		const uintHarOvh = BigInt("675")
		const addressYp3WT0K = accounts[0]
		const uintjVAXC3p = BigInt("151")
		const addressY8IPOfA = accounts[0]
		const uintC4jsNMy = await TetherTokenYajgShH.allowance.call(addressZdgSLTP, addressDZomQzr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYFAl6Na = await TetherTokenYajgShH.transferFrom.call(address4g9TcW, addressxfeoasy, uint1GktIx, {from: accounts[5]});
//		const uintlUdKPdu = await TetherTokenYajgShH.balanceOf.call(addresssn6LTWT, {from: accounts[4]});
//		const uintEOouSMf = await TetherTokenYajgShH.redeem.call(uintHarOvh, {from: accounts[5]});
//		const addressrEbNdyu = await TetherTokenYajgShH.deprecate.call(addressYp3WT0K, {from: accounts[0]});
//		const addressnDiMfAI = await TetherTokenYajgShH.approve.call(addressY8IPOfA, uintjVAXC3p, {from: accounts[2]});

		assert.equal(uintC4jsNMy, BigInt("0"))
		await expect(TetherTokenYajgShH.transferFrom.call(address4g9TcW, addressxfeoasy, uint1GktIx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintlJy7ik = BigInt("1472")
		const stringyH2Fsik = "4nvOvEMcgVY5eueiTfJzVvnsWoz3AwEfYALdbi01emnQL8fCPVQHsUnxRNmBICLJBqIBXZK2vtMArkpYtezBTrpB25NQVF"
		const stringFx8xdSl = "baMfnLaitJqyCwouVMdsoN2TQBDYvlo29a9Tvsnb7narV114yCbBcI1MPhxEyUFbNETsJPBPBA"
		const uintdPP8TZG = BigInt("756")
		const TetherTokenD06s2Q = await TetherToken.new(uintlJy7ik, stringyH2Fsik, stringFx8xdSl, uintdPP8TZG, {from: accounts[2]});
		const uintkLWG3I = BigInt("782")
		const addressN5oAY6i = accounts[0]
		const addressVpvdBEp = accounts[1]
		const uintZBNMF4p = BigInt("1580")
		const addressT9rwsbT = accounts[5]
		const addressbCE4bxM = accounts[3]
		const addressR53VPjV = accounts[1]
//		const addressB7usQvy = await TetherTokenD06s2Q.transfer.call(addressN5oAY6i, uintkLWG3I, {from: accounts[4]});
//		const uintT0L1xA = await TetherTokenD06s2Q.totalSupply.call({from: accounts[2]});
//		const uintziCjYo8 = await TetherTokenD06s2Q.balanceOf.call(addressVpvdBEp, {from: "0x0000000000000000000000000000000000000001"});
//		const uintG4XKClA = await TetherTokenD06s2Q.issue.call(uintZBNMF4p, {from: accounts[4]});
//		const addressQjs4gG = await TetherTokenD06s2Q.deprecate.call(addressT9rwsbT, {from: accounts[1]});
//		const uintviDvdY = await TetherTokenD06s2Q.allowance.call(addressR53VPjV, addressbCE4bxM, {from: accounts[5]});

		await expect(TetherTokenD06s2Q.transfer.call(addressN5oAY6i, uintkLWG3I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintz94LuxE = BigInt("1472")
		const stringyH2Fsik = "4nvOvEMcgVY5eueiTfJzVvnsWoz3AwEfYALdbi01emnQL8fCPVQHsUnxRNmBICLJBqIBXZK2vtMArkpYtezBTrpB25NQVF"
		const stringFx8xdSl = "baMfnLaitJqyCwouVMdsoN2TQBDYvlo29a9Tvsnb7narV114yCbBcI1MPhxEyUFbNETsJPBPBA"
		const uintQskfBXh = BigInt("756")
		const TetherTokenD06s2Q = await TetherToken.new(uintz94LuxE, stringyH2Fsik, stringFx8xdSl, uintQskfBXh, {from: accounts[2]});
		const addressVB5U66f = accounts[0]
		const uintNNAf7cL = BigInt("782")
		const addressdLPNk4Q = accounts[0]
		const addressowrrlIo = accounts[2]
		const uintC2urgBB = BigInt("1580")
		const addressxzDW4Aa = accounts[5]
		const addressezdXHG3 = accounts[3]
		const addresscRbYBEZ = accounts[1]
		const uintEdTdd2O = await TetherTokenD06s2Q.balanceOf.call(addressVB5U66f, {from: accounts[0]});
//		const addressB7usQvy = await TetherTokenD06s2Q.transfer.call(addressdLPNk4Q, uintNNAf7cL, {from: accounts[4]});
//		const uintT0L1xA = await TetherTokenD06s2Q.totalSupply.call({from: accounts[2]});
//		const uintziCjYo8 = await TetherTokenD06s2Q.balanceOf.call(addressowrrlIo, {from: "0x0000000000000000000000000000000000000001"});
//		const uintG4XKClA = await TetherTokenD06s2Q.issue.call(uintC2urgBB, {from: accounts[4]});
//		const addressQjs4gG = await TetherTokenD06s2Q.deprecate.call(addressxzDW4Aa, {from: accounts[1]});
//		const uintviDvdY = await TetherTokenD06s2Q.allowance.call(addresscRbYBEZ, addressezdXHG3, {from: accounts[5]});

		assert.equal(uintEdTdd2O, BigInt("0"))
		await expect(TetherTokenD06s2Q.transfer.call(addressdLPNk4Q, uintNNAf7cL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLiKqpf = BigInt("1758")
		const stringe9dFWtv = "6IyhK3cDdJnLDdRKvZUhH55SVsskerGhCwf9a5EZrS5JiysnwdUy0LmvWFydV6mI7auupbA7J41CbXynBwDdpvD9q"
		const stringaUGqxrI = "t4l7u7XMIdSYe6qokspIBangz5T9u6CoCsptBbYXQMQvKgALmc2xqfMBTDBswlswIQQmtA6ScOEtIc"
		const uintvshdTmH = BigInt("1088")
		const TetherTokendJtl0cn = await TetherToken.new(uintLiKqpf, stringe9dFWtv, stringaUGqxrI, uintvshdTmH, {from: accounts[3]});
		const addressn8YEtNh = accounts[1]
		const uintOOJDDwQ = BigInt("1446")
		const addressJXE2Coh = accounts[5]
		const addressyhoaCR = accounts[2]
		const addressZvRjzHe = accounts[5]
		const addressvhPUHyg = accounts[4]
		const uintUZ4qvct = BigInt("447")
		const addressZtPwO5h = accounts[3]
		const uintGD8p5g = await TetherTokendJtl0cn.balanceOf.call(addressn8YEtNh, {from: accounts[4]});
		const addressShWAGnY = await TetherTokendJtl0cn.approve.call(addressJXE2Coh, uintOOJDDwQ, {from: accounts[1]});
		const uintAfzVX6Y = await TetherTokendJtl0cn.totalSupply.call({from: accounts[2]});
//		const addressGBVA0vv = await TetherTokendJtl0cn.deprecate.call(addressyhoaCR, {from: "0x0000000000000000000000000000000000000001"});
//		const uintxEup6dy = await TetherTokendJtl0cn.allowance.call(addressvhPUHyg, addressZvRjzHe, {from: accounts[0]});
//		const addressdFApqw = await TetherTokendJtl0cn.transfer.call(addressZtPwO5h, uintUZ4qvct, {from: accounts[4]});

		assert.equal(uintAfzVX6Y, BigInt("1758"))
		assert.equal(uintGD8p5g, BigInt("0"))
		await expect(TetherTokendJtl0cn.deprecate.call(addressyhoaCR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinth18LcAV = BigInt("697")
		const stringqmp8q5T = "9PHoKFPxMKkIlu390T7ro"
		const stringDZsPeY = "wREtx3ySKdPhuyGM1OIPcJuZIzMpOzBumQ1zwN"
		const uintXeAkI3u = BigInt("1667")
		const TetherTokenEmXjRs0 = await TetherToken.new(uinth18LcAV, stringqmp8q5T, stringDZsPeY, uintXeAkI3u, {from: "0x0000000000000000000000000000000000000001"});
		const uintKKUxw5 = BigInt("420")
		const addresseoBSjMu = accounts[0]
		const addresshuWQ0lC = accounts[4]
		const addresstCgU8Qq = accounts[1]
		const uintGXlghjR = BigInt("1628")
		const addressiVH8Pou = accounts[1]
		const addressM9utJxz = accounts[5]
		const addresshJfduEI = await TetherTokenEmXjRs0.approve.call(addresseoBSjMu, uintKKUxw5, {from: accounts[1]});
		const uinthPLfdOV = await TetherTokenEmXjRs0.allowance.call(addresstCgU8Qq, addresshuWQ0lC, {from: accounts[0]});
		const uintWPSFb0w = await TetherTokenEmXjRs0.issue.call(uintGXlghjR, {from: accounts[4]});
		const uintTxpi9K3 = await TetherTokenEmXjRs0.allowance.call(addressM9utJxz, addressiVH8Pou, {from: accounts[0]});
	});

	it('test for TetherToken', async () => {
		const uintpX4RmyQ = BigInt("936")
		const stringQ226R6k = "r5A18Asp7VkNc2hFK1c3bvtK6KrCVN5NaYpO5xqTL12fwR5"
		const stringKAeX0l = "mYbVpW3kkSHeppOKCK2TEJuIF7BOx9R7ovh4Mjhlz9u8PTsOfa9VSpAwIvnEWB4kz7c7ysxhfbHHQ3"
		const uintM5jUovh = BigInt("450")
		const TetherTokenRuwSc6 = await TetherToken.new(uintpX4RmyQ, stringQ226R6k, stringKAeX0l, uintM5jUovh, {from: accounts[3]});
		const uintI5n2lXP = BigInt("1095")
		const uinthekxPd = BigInt("358")
		const uintthMD254 = await TetherTokenRuwSc6.totalSupply.call({from: accounts[5]});
//		const uintbja2ZET = await TetherTokenRuwSc6.setParams.call(uinthekxPd, uintI5n2lXP, {from: accounts[3]});

		assert.equal(uintthMD254, BigInt("936"))
		await expect(TetherTokenRuwSc6.setParams.call(uinthekxPd, uintI5n2lXP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})