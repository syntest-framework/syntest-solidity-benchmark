const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressCWaE5sK = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressCWaE5sK, {from: accounts[1]});
		const addressjmqCZXi = accounts[4]
		const uint256VFcZ9Md = await VotingAFiBlXX.snapshot.call({from: accounts[4]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressjmqCZXi, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingpTTtDyc = await Voting.new({from: accounts[3]});
		const uintwWXtyjB = BigInt("921")
		await VotingpTTtDyc.onlyMinter.call({from: accounts[4]});
		const uint256ZyGlDIV = await VotingpTTtDyc.burn.call(uintwWXtyjB, {from: accounts[0]});
		await VotingpTTtDyc.onlyMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingKMXZHj = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyA8TQh = BigInt("48")
		const addressiE2BqlE = accounts[5]
		const boolhLfPlu = await VotingKMXZHj.mint.call(addressiE2BqlE, uintyA8TQh, {from: accounts[4]});
		const uint8qZ9sKji = await VotingKMXZHj.decimals.call({from: accounts[4]});
		await VotingKMXZHj.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresspK7MB1j = accounts[4]
		const VotingG2WNzn8 = await Voting.new(addresspK7MB1j, {from: accounts[4]});
		const addressveSkGp8 = "0x0000000000000000000000000000000000000001"
		const uintY66w7uK = BigInt("1719")
		const boolgGxMxkU = await VotingG2WNzn8.isValidOracleAddress.call(addressveSkGp8, {from: accounts[5]});
		const uint256NtMzaDz = await VotingG2WNzn8.veto.call(uintY66w7uK, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressZ7W4cXJ = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressZ7W4cXJ, {from: accounts[1]});
		const addressMvK9ezq = accounts[0]
		const uintVE5C3fn = BigInt("1232")
		const addressd78UwgR = accounts[5]
		const boollRdoNu5 = await VotingAFiBlXX.didAddressVote.call(uintVE5C3fn, addressMvK9ezq, {from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressd78UwgR, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressAyxJ7WZ = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressAyxJ7WZ, {from: accounts[1]});
		const addressFYS9o5Y = accounts[5]
		const boolbmJDWNX = await VotingAFiBlXX.isOwner.call({from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressFYS9o5Y, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const address4TT3R7 = accounts[3]
		const VotingAFiBlXX = await Voting.new(address4TT3R7, {from: accounts[1]});
		const addressWhHlzQG = accounts[5]
		const addressZvm2pPx = await VotingAFiBlXX.owner.call({from: accounts[4]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressWhHlzQG, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressh8GDU2 = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressh8GDU2, {from: accounts[1]});
		const addressuzin7AQ = accounts[3]
		const uintoT5Jh2T = BigInt("921")
		const addressFXogFgl = accounts[5]
		const addressyMmshNl = accounts[4]
		const addressqonKJ4d = accounts[0]
		const addressVxChWpU = accounts[4]
		const boolTMtTaH = await VotingAFiBlXX.isValidStamperAddress.call(addressuzin7AQ, {from: accounts[4]});
		const boolAViFq7 = await VotingAFiBlXX.transferFrom.call(addressyMmshNl, addressFXogFgl, uintoT5Jh2T, {from: accounts[3]});
		const boolRBnrFYq = await VotingAFiBlXX.isValidStamperAddress.call(addressqonKJ4d, {from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressVxChWpU, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressKMTEue5 = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressKMTEue5, {from: accounts[1]});
		const stringvY3uC5Q = "jwwdALRurq9CSJSHW9f7otaFQ41YudFvZMS5qstID4sLyiP1tIxmpjy"
		const stringdwDghom = "TBhwTmpwAbRrrdrCcdsGl9EV0wzi2ytxwG9BUkTWz5Bb9eKKWFSjEKg1I7mcBiStar3xxY5MBN2QQQJzyDOi1U"
		const stringKhrQu8 = "kUmO10XDW3soJKPuQtTNvYSsEzNZ66tYnWpxRXaLJtxA5j5sTJRIj5Qmh5KR"
		const byteWCW31na = "0x15160f1f0a"
		const addresszh9GtjN = accounts[2]
		const addressToI6utR = accounts[3]
		const 
eyfZHQ2 = await VotingAFiBlXX.createProposal.call(addresszh9GtjN, byteWCW31na, stringKhrQu8, stringdwDghom, stringvY3uC5Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressToI6utR, {from: accounts[3]});
		const uint256ecfrCT5 = await VotingAFiBlXX.snapshot.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressFo3MaLI = accounts[3]
		const VotingDUwoq0 = await Voting.new(addressFo3MaLI, {from: accounts[3]});
		const addressJ1hvUxq = accounts[1]
		const uintGelZ59 = BigInt("1150")
		const addressRchTg8T = accounts[1]
		const boolVnojH4o = await VotingDUwoq0.isVotingSystem.call(addressJ1hvUxq, {from: accounts[2]});
		await VotingDUwoq0.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
		const uint256cbEbZk3 = await VotingDUwoq0.veto.call(uintGelZ59, {from: accounts[3]});
		await VotingDUwoq0.onlyExchange.call({from: accounts[0]});
		const addressbvjKtUo = await VotingDUwoq0.ownableUpgrade.call(addressRchTg8T, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressLZL7JAH = accounts[3]
		const VotingjhbT3M5 = await Voting.new(addressLZL7JAH, {from: accounts[1]});
		const addressaigHHXV = accounts[4]
		const uintpnFipKt = BigInt("1718")
		const uintGpZlafb = BigInt("1509")
		const boolQjJUB4X = await VotingjhbT3M5.didAddressVote.call(uintpnFipKt, addressaigHHXV, {from: accounts[3]});
		const uint256HbCiYWU = await VotingjhbT3M5.veto.call(uintGpZlafb, {from: accounts[0]});
		await VotingjhbT3M5.onlyOwner.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressSLBObai = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressSLBObai, {from: accounts[1]});
		const uintMgl02Qy = BigInt("196")
		const addresss2NdoPd = accounts[0]
		const addressElELDNA = accounts[4]
		const boolPHZL5Tz = await VotingAFiBlXX.approve.call(addresss2NdoPd, uintMgl02Qy, {from: accounts[0]});
		const stringVQu3Sxr = await VotingAFiBlXX.symbol.call({from: accounts[0]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressElELDNA, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressvsCzV5A = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressvsCzV5A, {from: accounts[1]});
		const addressukfRmKA = accounts[4]
		const addressXFo6cTv = accounts[3]
		const boolu8td9vn = await VotingAFiBlXX.isValidVerifierAddress.call(addressukfRmKA, {from: accounts[4]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressXFo6cTv, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresspp0AAkR = accounts[3]
		const VotingAFiBlXX = await Voting.new(addresspp0AAkR, {from: accounts[1]});
		const addressDq22OFC = accounts[5]
		const addresswtD3yxM = accounts[5]
		const boolAmHrlqJ = await VotingAFiBlXX.isExchangeFactory.call(addressDq22OFC, {from: accounts[0]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addresswtD3yxM, {from: accounts[3]});
		await VotingAFiBlXX.requiresLiquidityTokenSnapshotAccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresst0pWJYs = accounts[3]
		const VotingAFiBlXX = await Voting.new(addresst0pWJYs, {from: accounts[1]});
		const addressMRK2IZT = accounts[4]
		await VotingAFiBlXX.renounceOwnership.call({from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressMRK2IZT, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresstfQTpj = accounts[3]
		const VotingAFiBlXX = await Voting.new(addresstfQTpj, {from: accounts[1]});
		const uinteWW6ctK = BigInt("1254")
		const addresstM9qm4g = accounts[5]
		const uint256esRdTh = await VotingAFiBlXX.veto.call(uinteWW6ctK, {from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addresstM9qm4g, {from: accounts[3]});
		await VotingAFiBlXX.nonReentrant.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingF9QMNr7 = await Voting.new({from: accounts[5]});
		const uint25668PFDS = await VotingF9QMNr7.snapshot.call({from: accounts[5]});
		await VotingF9QMNr7.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const Votingt8VYfB1 = await Voting.new({from: accounts[0]});
		const addressknaL5U = accounts[0]
		const addressTNrmLfq = accounts[1]
		const boolrWlJUqc = await Votingt8VYfB1.isVotingSystem.call(addressknaL5U, {from: accounts[3]});
		await Votingt8VYfB1.requiresWalletAcccess.call({from: accounts[0]});
		const addressnIAwHOw = await Votingt8VYfB1.transferOwnership.call(addressTNrmLfq, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressFzMBaGV = accounts[4]
		const Voting9IbtyF = await Voting.new(addressFzMBaGV, {from: accounts[2]});
		const addressJTqSg9 = accounts[1]
		const addressNdl26eO = accounts[2]
		const uintN20jcku = BigInt("194")
		const addressj696jvH = accounts[2]
		const uintNSF5Hgp = BigInt("1936")
		const addressS4h5gOM = accounts[3]
		const addressEfufB2l = await Voting9IbtyF.ownableUpgrade.call(addressJTqSg9, {from: accounts[2]});
		const address3WOYp9 = await Voting9IbtyF.transferOwnership.call(addressNdl26eO, {from: accounts[1]});
		const addressgUANnfk = await Voting9IbtyF.getRegistryAddress.call({from: accounts[4]});
		const boolAI7WKb = await Voting9IbtyF.transfer.call(addressj696jvH, uintN20jcku, {from: accounts[3]});
		const boolFTA76fi = await Voting9IbtyF.transfer.call(addressS4h5gOM, uintNSF5Hgp, {from: accounts[2]});
		await Voting9IbtyF.renounceMinter.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingYskXqQa = await Voting.new({from: accounts[4]});
		const uintEepip3e = BigInt("886")
		const address7oyLao = accounts[0]
		const stringuu9C4GO = "ApoPPX43dBkPs5jbw1av4msfauLcsz6Bxen8r2F2xFuxmPyO2GokotQm2rGTDVSG7pLJAH5iJ4h"
		const stringcF62Ql5 = "X6SQd9JLd2kGLkyDI"
		const stringFGe1eJG = "kf9aDyQuzkKFDFhDvGr"
		const byteF5ocWg = "0x0414"
		const addressCADDIbm = accounts[1]
		const address3KtDrT = accounts[1]
		const boolgsssgAh = await VotingYskXqQa.approve.call(address7oyLao, uintEepip3e, {from: "0x0000000000000000000000000000000000000001"});
		const 
xVIPiIh = await VotingYskXqQa.createProposal.call(addressCADDIbm, byteF5ocWg, stringFGe1eJG, stringcF62Ql5, stringuu9C4GO, {from: accounts[2]});
		const boolxYRqhVD = await VotingYskXqQa.isValidStamperAddress.call(address3KtDrT, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressUiQmLDZ = accounts[3]
		const VotingAFiBlXX = await Voting.new(addressUiQmLDZ, {from: accounts[1]});
		const uintGXjGtQH = BigInt("48")
		const addressiQgT4GO = accounts[5]
		const addressIcXNCGK = accounts[4]
		const addressgmll0FG = accounts[1]
		const uint256WVQA4Q3 = await VotingAFiBlXX.pause.call(uintGXjGtQH, {from: accounts[4]});
		const boolLp1HWyd = await VotingAFiBlXX.isValidVerifierAddress.call(addressiQgT4GO, {from: "0x0000000000000000000000000000000000000001"});
		await VotingAFiBlXX.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressIcXNCGK, {from: accounts[3]});
		const addressSWrcfTP = await VotingAFiBlXX.transferOwnership.call(addressgmll0FG, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresso4mf3j8 = accounts[2]
		const Votingdm33caO = await Voting.new(addresso4mf3j8, {from: "0x0000000000000000000000000000000000000001"});
		const uintdNP1xL0 = BigInt("396")
		const uinthDankQ = BigInt("1286")
		const addresszJP9XuP = accounts[1]
		const uintKDSc7Cj = BigInt("1422")
		const addresssKNguhc = accounts[4]
		const uint256OSyxtcU = await Votingdm33caO.totalSupply.call({from: accounts[3]});
		const uint256OyflUa = await Votingdm33caO.burn.call(uintdNP1xL0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jCg073X = await Votingdm33caO.totalSupplyAt.call(uinthDankQ, {from: accounts[4]});
		const stringCh7uvtN = await Votingdm33caO.name.call({from: accounts[4]});
		const boolu0Xo8Tp = await Votingdm33caO.isExchangeFactory.call(addresszJP9XuP, {from: accounts[1]});
		const boolewNG47Y = await Votingdm33caO.transfer.call(addresssKNguhc, uintKDSc7Cj, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresszd0bN0L = accounts[3]
		const VotingAFiBlXX = await Voting.new(addresszd0bN0L, {from: accounts[1]});
		const uintpx0kbX9 = BigInt("847")
		const addressavvwuC7 = accounts[3]
		const uint256w2yGBPA = await VotingAFiBlXX.resolve.call(uintpx0kbX9, {from: accounts[4]});
		const addressIZSWRQd = await VotingAFiBlXX.getRegistryAddress.call({from: accounts[3]});
		const uint256FD8Q0Un = await VotingAFiBlXX.balanceOf.call(addressavvwuC7, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingZ8UV68Q = await Voting.new({from: accounts[1]});
		const addressyIMH4F5 = accounts[4]
		const uintivjU86R = BigInt("36")
		const addressBfgHRbk = accounts[1]
		const uintpYUOZ2b = BigInt("1862")
		const addressAlCoM1k = accounts[4]
		const addressqzpzEfd = accounts[0]
		const addressmY4SJ6x = await VotingZ8UV68Q.ownableUpgrade.call(addressyIMH4F5, {from: accounts[4]});
		await VotingZ8UV68Q.onlyOwner.call({from: accounts[5]});
		const boolUth1oJx = await VotingZ8UV68Q.approve.call(addressBfgHRbk, uintivjU86R, {from: "0x0000000000000000000000000000000000000001"});
		const boolQQWtWPX = await VotingZ8UV68Q.mint.call(addressAlCoM1k, uintpYUOZ2b, {from: accounts[2]});
		const boolfIdkrTe = await VotingZ8UV68Q.isMinter.call(addressqzpzEfd, {from: "0x0000000000000000000000000000000000000001"});
		await VotingZ8UV68Q.onlyRegistry.call({from: "0x0000000000000000000000000000000000000001"});
	});
})