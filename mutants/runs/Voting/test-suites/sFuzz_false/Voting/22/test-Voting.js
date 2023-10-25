const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressMZsvRqQ = accounts[5]
		const Votingg8zTaEJ = await Voting.new(addressMZsvRqQ, {from: accounts[2]});
		const addressYmd3n7 = accounts[4]
		const addresscB6G3mN = "0x0000000000000000000000000000000000000001"
		const addressBE2Sqih = accounts[1]
		const uintkZ78XUe = BigInt("240")
		const addressn74lRBY = accounts[0]
		const boolzmWE1rm = await Votingg8zTaEJ.isValidVerifierAddress.call(addressYmd3n7, {from: accounts[3]});
		await Votingg8zTaEJ.onlyMessageProcessor.call({from: accounts[1]});
		const bools7vraEu = await Votingg8zTaEJ.isValidVerifierAddress.call(addresscB6G3mN, {from: accounts[3]});
		const boolT1DNbls = await Votingg8zTaEJ.isValidVerifierAddress.call(addressBE2Sqih, {from: accounts[1]});
		const addresswo7Z9TF = await Votingg8zTaEJ.burnFrom.call(addressn74lRBY, uintkZ78XUe, {from: "0x0000000000000000000000000000000000000001"});
		const uint8G7WJ12K = await Votingg8zTaEJ.decimals.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressdx0jU11 = accounts[1]
		const VotingVC8D1Mg = await Voting.new(addressdx0jU11, {from: accounts[0]});
		const addressycBu2yO = accounts[4]
		const uintmMkBmHn = BigInt("1146")
		const uintVVjeZr = BigInt("758")
		const addressRW4KztR = accounts[3]
		const addressPO57wjc = await VotingVC8D1Mg.getRegistryAddress.call({from: accounts[5]});
		await VotingVC8D1Mg.renounceOwnership.call({from: accounts[4]});
		const boolvxvymHV = await VotingVC8D1Mg.isVotingSystem.call(addressycBu2yO, {from: accounts[2]});
		const uint256COrk6DH = await VotingVC8D1Mg.totalSupplyAt.call(uintmMkBmHn, {from: accounts[0]});
		const boolUtqlBX8 = await VotingVC8D1Mg.increaseAllowance.call(addressRW4KztR, uintVVjeZr, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressPHhMuCM = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressPHhMuCM, {from: accounts[1]});
		const uintwmISZ3B = BigInt("1754")
		const addressr46lAAr = accounts[2]
		const uintlnx1I0p = BigInt("1427")
		const addressYl1Fjw0 = accounts[0]
		const uint256C376rX = await Votingnjo1K5H.pause.call(uintwmISZ3B, {from: accounts[0]});
		const uint256Ri7lzEs = await Votingnjo1K5H.balanceOf.call(addressr46lAAr, {from: accounts[4]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressYl1Fjw0, uintlnx1I0p, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingrXnv9n6 = await Voting.new({from: accounts[0]});
		const uintQM2USka = BigInt("977")
		const addressABPZPp = accounts[4]
		const addressGJmVkjk = accounts[3]
		const boolHjpvXoE = await VotingrXnv9n6.transferFrom.call(addressGJmVkjk, addressABPZPp, uintQM2USka, {from: "0x0000000000000000000000000000000000000001"});
		await VotingrXnv9n6.onlyVotingSystem.call({from: accounts[3]});
		await VotingrXnv9n6.onlyRegistry.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressiIzmJz1 = accounts[1]
		const VotingXRBa7y = await Voting.new(addressiIzmJz1, {from: "0x0000000000000000000000000000000000000001"});
		const addresssf8Ce11 = accounts[3]
		await VotingXRBa7y.onlyVotingSystem.call({from: accounts[5]});
		await VotingXRBa7y.requiresWalletAcccess.call({from: accounts[3]});
		const boollC6VmAm = await VotingXRBa7y.isValidOracleAddress.call(addresssf8Ce11, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressqhMv01Q = accounts[2]
		const VotinggtDJVKZ = await Voting.new(addressqhMv01Q, {from: accounts[2]});
		const uintnmMHmV = BigInt("905")
		const uintenjrTvb = BigInt("729")
		const uintVp5WKS = BigInt("135")
		const addressghJLTr = accounts[0]
		const uint256TvREGv2 = await VotinggtDJVKZ.veto.call(uintnmMHmV, {from: accounts[5]});
		await VotinggtDJVKZ.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
		const uint256K7alahR = await VotinggtDJVKZ.veto.call(uintenjrTvb, {from: accounts[4]});
		const boolH3IsDd0 = await VotinggtDJVKZ.transfer.call(addressghJLTr, uintVp5WKS, {from: accounts[3]});
		await VotinggtDJVKZ.onlyOwner.call({from: accounts[5]});
		const addressxM1tIuY = await VotinggtDJVKZ.getRegistryAddress.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresskuD7pUR = accounts[4]
		const VotingjbH7fav = await Voting.new(addresskuD7pUR, {from: accounts[2]});
		const addressDJSPgpl = accounts[3]
		const uintZAyvFC = BigInt("898")
		const addresssIlnbYT = accounts[1]
		const uintvuVaXAX = BigInt("1087")
		const addresspAeazX9 = accounts[1]
		const addressKb2q2yW = accounts[3]
		const boolRqDkCfs = await VotingjbH7fav.didAddressVote.call(uintZAyvFC, addressDJSPgpl, {from: accounts[2]});
		await VotingjbH7fav.nonReentrant.call({from: accounts[2]});
		const boolbbRwB0H = await VotingjbH7fav.isMinter.call(addresssIlnbYT, {from: "0x0000000000000000000000000000000000000001"});
		const boolwqyWNuA = await VotingjbH7fav.transfer.call(addresspAeazX9, uintvuVaXAX, {from: accounts[2]});
		const uint256t8ea1eH = await VotingjbH7fav.balanceOf.call(addressKb2q2yW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressJqfy2Ey = accounts[0]
		const VotingO21xnRO = await Voting.new(addressJqfy2Ey, {from: accounts[1]});
		const addressrZSMwuA = accounts[1]
		const uintzhDkuzv = BigInt("668")
		const boolYFijAK2 = true
		const uintDxNbE0X = BigInt("1878")
		const boolLglK1ax = await VotingO21xnRO.isVotingSystem.call(addressrZSMwuA, {from: accounts[2]});
		const uint256nIS8n4N = await VotingO21xnRO.veto.call(uintzhDkuzv, {from: accounts[0]});
		const uint256VEiqM2 = await VotingO21xnRO.vote.call(uintDxNbE0X, boolYFijAK2, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressyMirM8a = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressyMirM8a, {from: accounts[1]});
		const address3J6IXT = accounts[1]
		const uintU1qKXy = BigInt("1427")
		const addressbNuZPEq = accounts[0]
		const uintdQrZePN = BigInt("774")
		const booloSPrOr3 = await Votingnjo1K5H.isValidStamperAddress.call(address3J6IXT, {from: accounts[0]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressbNuZPEq, uintU1qKXy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YSaQGE6 = await Votingnjo1K5H.approve.call(uintdQrZePN, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresss7EyNV7 = accounts[3]
		const Votingnjo1K5H = await Voting.new(addresss7EyNV7, {from: accounts[1]});
		const boolNviccL6 = false
		const uintY9TPDd = BigInt("1922")
		const uinteL3cbQ8 = BigInt("1428")
		const addressfy9CGys = accounts[3]
		const uint256ZHWHInQ = await Votingnjo1K5H.vote.call(uintY9TPDd, boolNviccL6, {from: accounts[4]});
		const uint256tVR8scq = await Votingnjo1K5H.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressfy9CGys, uinteL3cbQ8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressQT682Vd = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressQT682Vd, {from: accounts[1]});
		const addressGHs6zo = accounts[1]
		const uintEI1LZt = BigInt("1672")
		const uintxMVGiTH = BigInt("1440")
		const addressayY0Od = accounts[3]
		const boolDmaraiL = await Votingnjo1K5H.isValidOracleAddress.call(addressGHs6zo, {from: accounts[2]});
		await Votingnjo1K5H.onlyMinter.call({from: accounts[2]});
		const uint256gYtMr3c = await Votingnjo1K5H.approve.call(uintEI1LZt, {from: accounts[5]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressayY0Od, uintxMVGiTH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresspbb2HCu = accounts[3]
		const Votingnjo1K5H = await Voting.new(addresspbb2HCu, {from: accounts[1]});
		const addressmHLgrl = "0x0000000000000000000000000000000000000001"
		const uintH42cKOf = BigInt("1147")
		const uintF3If50L = BigInt("1427")
		const addressDDmKYh4 = accounts[0]
		const bool6EbxdK = await Votingnjo1K5H.isExchangeFactory.call(addressmHLgrl, {from: accounts[3]});
		const uint256nPtrbjr = await Votingnjo1K5H.burn.call(uintH42cKOf, {from: accounts[5]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressDDmKYh4, uintF3If50L, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotinglDbCzKI = await Voting.new({from: accounts[5]});
		const uintPFtsybp = BigInt("822")
		const uint256jYsb5iM = await VotinglDbCzKI.burn.call(uintPFtsybp, {from: accounts[3]});
		const stringiXRqcDT = await VotinglDbCzKI.name.call({from: accounts[0]});
		await VotinglDbCzKI.onlyMessageProcessor.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressUUNA57h = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressUUNA57h, {from: accounts[1]});
		const uintd6UcLY9 = BigInt("1725")
		const uint256uY8LBeV = await Votingnjo1K5H.resolve.call(uintd6UcLY9, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingcFI5dV8 = await Voting.new({from: accounts[2]});
		const uintSkrX1ma = BigInt("104")
		const stringlNjWsp = "G2bjZoxpXDqXfuDuJKVFcA2UFztntdnmTU7Vrko4AVOfPwEIZBCq8QRgd7BK"
		const stringPOVIw5Z = "DJkhFJmBF4gE4RCNmvF6tm3re645sp2XlsxME"
		const stringQfK7Yqq = "fVQdXCO6XO46G7UnNQb1618l8Q60QgpHtbSe2hMfd5vZTpm2gkmHrAupj8Tv9xkir1bsL"
		const byteXG9rils = "0x09000e030f12141406190e0a13100207"
		const addressavwwX9F = accounts[2]
		const uint256gkfudQv = await VotingcFI5dV8.totalSupplyAt.call(uintSkrX1ma, {from: accounts[0]});
		const uint256pEQeJF = await VotingcFI5dV8.totalSupply.call({from: accounts[0]});
		const 
hWw6Swz = await VotingcFI5dV8.createProposal.call(addressavwwX9F, byteXG9rils, stringQfK7Yqq, stringPOVIw5Z, stringlNjWsp, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressU7vHSr3 = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressU7vHSr3, {from: accounts[1]});
		const stringwyWMeA2 = "WcBgetbQsjsaMC0aT"
		const stringQPt810u = "CqdnsJEjCGFApMJTFKm1shfrzKDDzrSzXvv5CRhkZuNmkBvbvjMExbJ6QHHEeXpSGl0DqCW6cb5oGDTfJMbWBzXElP9zvPQ6Bg"
		const stringVspevS2 = "7okeA7H25zdIqckz5iycxMqr"
		const byteIp7Ink4 = "0x041c140211131f091508151d180d120f1113071e011a0e0f19060b1101"
		const addressSVtCEOj = accounts[0]
		const uintZdDVpYK = BigInt("1725")
		const addressWAZHCy = "0x0000000000000000000000000000000000000001"
		const 
ABoKZUM = await Votingnjo1K5H.createProposal.call(addressSVtCEOj, byteIp7Ink4, stringVspevS2, stringQPt810u, stringwyWMeA2, {from: accounts[4]});
		const uint256uY8LBeV = await Votingnjo1K5H.resolve.call(uintZdDVpYK, {from: accounts[1]});
		const addressvmUdvaV = await Votingnjo1K5H.ownableUpgrade.call(addressWAZHCy, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressDx8UbWU = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressDx8UbWU, {from: accounts[1]});
		const uintpO4iIr = BigInt("1412")
		const addressXYruDgB = accounts[4]
		const addressyGVwuTm = await Votingnjo1K5H.owner.call({from: accounts[0]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressXYruDgB, uintpO4iIr, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingKdvVH1 = await Voting.new({from: accounts[3]});
		const uintm1YZ2jl = BigInt("1534")
		const stringzCtpvqp = "OB"
		const stringWkDnTfR = "7PWWkXuGPLnDb5dwkOMchYIRJlHmh9OAhTRQH9ptbmvB9HcdrVaY2kLXX3xRK7qyw3mLi4tU3hye7O16SvqKEkM38B"
		const stringu4i3KPi = "TtA0m5vbnKbP9eho3Nxe9Yp5oKIeVkU"
		const bytewyji5WC = "0x130a15050e0c201b0d191f051c150b1b0b1f020c0b0a1c191402"
		const addressOIvL86I = accounts[1]
		const uint256v1p6YD = await VotingKdvVH1.veto.call(uintm1YZ2jl, {from: accounts[3]});
		const 
ei5Qgqv = await VotingKdvVH1.createProposal.call(addressOIvL86I, bytewyji5WC, stringu4i3KPi, stringWkDnTfR, stringzCtpvqp, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressJFCpOCj = accounts[3]
		const Votingnjo1K5H = await Voting.new(addressJFCpOCj, {from: accounts[1]});
		const addresspwhouPq = accounts[3]
		const uintWu8LwzT = BigInt("1336")
		const addressCi6DGMb = accounts[3]
		const addressf9Ikm4 = await Votingnjo1K5H.ownableUpgrade.call(addresspwhouPq, {from: accounts[1]});
		const uint256D47rKt1 = await Votingnjo1K5H.balanceOfAt.call(addressCi6DGMb, uintWu8LwzT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressx4gxSWK = accounts[0]
		const VotingUePAQe2 = await Voting.new(addressx4gxSWK, {from: accounts[2]});
		const uintoydY7pD = BigInt("91")
		const addressTNUiDyU = accounts[0]
		const uinteZKZ2YH = BigInt("826")
		const addressfRXOP0X = accounts[2]
		const uint256XKyB2lA = await VotingUePAQe2.approve.call(uintoydY7pD, {from: accounts[2]});
		const boolbcjZIUJ = await VotingUePAQe2.isExchangeFactory.call(addressTNUiDyU, {from: accounts[0]});
		const boolMgzxMu2 = await VotingUePAQe2.decreaseAllowance.call(addressfRXOP0X, uinteZKZ2YH, {from: accounts[3]});
	});
})