const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGshhQjr = "UxnPOEUX1g7QbuTaETRTbGo"
		const stringI4WC3E5 = "lhTSuJphF7vXeScINERlx7sYCkwDrPbpo3FASKrUh7fGW8eQ4zPP2gM7yydbQpHzmBb"
		const uintw7G4L87 = BigInt("34")
		const NasiLiquidityPoolFactoryhAc8PfQ = await NasiLiquidityPoolFactory.new(stringGshhQjr, stringI4WC3E5, uintw7G4L87, {from: accounts[4]});
		const uintCbQYbeR = BigInt("304")
		const addressO0CkbIG = accounts[0]
		await NasiLiquidityPoolFactoryhAc8PfQ.onlyMinter.call({from: accounts[0]});
		const addressLUTKZFs = await NasiLiquidityPoolFactoryhAc8PfQ.burnFrom.call(addressO0CkbIG, uintCbQYbeR, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIk9ZQZc = accounts[2]
		const addressYO32pV = accounts[3]
		const uinturmcrAo = BigInt("869")
		const uintszkhNes = BigInt("503")
		const NasiLiquidityPoolFactoryVfAAm1K = await NasiLiquidityPoolFactory.new(addressIk9ZQZc, addressYO32pV, uinturmcrAo, uintszkhNes, {from: accounts[0]});
		const uintcPsBIl2 = BigInt("297")
		const addressO3Pd7Rq = accounts[2]
		await NasiLiquidityPoolFactoryVfAAm1K.unpause.call({from: accounts[3]});
		const boolUtHMeYG = await NasiLiquidityPoolFactoryVfAAm1K.approve.call(addressO3Pd7Rq, uintcPsBIl2, {from: accounts[4]});
		await NasiLiquidityPoolFactoryVfAAm1K.whenNotPaused.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringWTJbcd = "A1NhlN1TLVr9G0tdGSvpaKaKQOCHzGS03s54gDYyXu4a3NKqt4v44jgHJ4rsZvxRsMRD"
		const stringcrEhSzL = "WzwyIn1YYMg3Pkzw91MB39C9m4NxsXsQu"
		const uintreBjTxJ = BigInt("195")
		const NasiLiquidityPoolFactoryoW3rYNa = await NasiLiquidityPoolFactory.new(stringWTJbcd, stringcrEhSzL, uintreBjTxJ, {from: accounts[1]});
		const uintZT3v3qr = BigInt("1180")
		const addressq0qrjL2 = accounts[4]
		const addressYerq3M9 = accounts[2]
		const uint256PIfZjOP = await NasiLiquidityPoolFactoryoW3rYNa.burn.call(uintZT3v3qr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VwtkoSX = await NasiLiquidityPoolFactoryoW3rYNa.balanceOf.call(addressq0qrjL2, {from: accounts[2]});
		const uint256nl5Bgb = await NasiLiquidityPoolFactoryoW3rYNa.getCurrentVotes.call(addressYerq3M9, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringb00KSF9 = "imAAjT7DYyM7NRWdHYp5gSM5GXLM"
		const stringuHqMZUU = "Sm7gXVjeuKbRBsxYSUGccEX3QY3xz"
		const uintXh8nB6p = BigInt("26")
		const NasiLiquidityPoolFactoryLkGERsj = await NasiLiquidityPoolFactory.new(stringb00KSF9, stringuHqMZUU, uintXh8nB6p, {from: accounts[2]});
		const uintxn4qOka = BigInt("1403")
		const addressiwJbVwf = accounts[1]
		const boolocmmue0 = await NasiLiquidityPoolFactoryLkGERsj.decreaseAllowance.call(addressiwJbVwf, uintxn4qOka, {from: accounts[2]});
		await NasiLiquidityPoolFactoryLkGERsj.onlyOwner.call({from: accounts[2]});
		const boolY2A91TT = await NasiLiquidityPoolFactoryLkGERsj.isOwner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringWoHN5Ug = "pknJcR3TJ6CWbN1YaPi6GVVYROLOdo5ACnS"
		const stringZteJzKl = "WQalgNL6owNxvtHEyzPaMOkYd4DJmiyjLLN8BI2EnvzRgf"
		const uintuPQgWc4 = BigInt("254")
		const NasiLiquidityPoolFactorygU7FVPx = await NasiLiquidityPoolFactory.new(stringWoHN5Ug, stringZteJzKl, uintuPQgWc4, {from: accounts[3]});
		const uintoYxoXyT = BigInt("1645")
		const addressvUzTSHX = accounts[2]
		const byteQPl4FTF = "0x0d0b0e1018190703171c04161103031a1a010b100201101e080c07180a0e1111"
		const bytegyVUtlc = "0x0e1e0a092013001419021605051418091401171004101e0210021a021f0f101e"
		const uintYiE4cUr = BigInt("122")
		const uintuqnD81d = BigInt("570")
		const uintcZAlrZ = BigInt("669")
		const addressbjvfYBn = accounts[0]
		const boolZACjaMG = await NasiLiquidityPoolFactorygU7FVPx.increaseAllowance.call(addressvUzTSHX, uintoYxoXyT, {from: accounts[3]});
		const 
Elr8aGy = await NasiLiquidityPoolFactorygU7FVPx.delegateBySig.call(addressbjvfYBn, uintcZAlrZ, uintuqnD81d, uintYiE4cUr, bytegyVUtlc, byteQPl4FTF, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressiRASpfJ = accounts[2]
		const addressutlhnT = "0x0000000000000000000000000000000000000001"
		const uintrvh0v9J = BigInt("1120")
		const uintvzBNaD3 = BigInt("948")
		const NasiLiquidityPoolFactoryqLm0YzQ = await NasiLiquidityPoolFactory.new(addressiRASpfJ, addressutlhnT, uintrvh0v9J, uintvzBNaD3, {from: accounts[2]});
		const uintQzfNcWx = BigInt("442")
		const addressaURD25 = accounts[4]
		const addressHUEGp2 = accounts[0]
		const uint2569pQiCe = await NasiLiquidityPoolFactoryqLm0YzQ.emergencyWithdraw.call(uintQzfNcWx, {from: accounts[1]});
		const uint256wxJS1ts = await NasiLiquidityPoolFactoryqLm0YzQ.allowance.call(addressHUEGp2, addressaURD25, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressAoee5DX = accounts[2]
		const address9F5dMt = accounts[1]
		const uintmzpgyHY = BigInt("412")
		const uintXChkyC2 = BigInt("854")
		const NasiLiquidityPoolFactoryfax8sH = await NasiLiquidityPoolFactory.new(addressAoee5DX, address9F5dMt, uintmzpgyHY, uintXChkyC2, {from: accounts[1]});
		const uintPeF3UVb = BigInt("1423")
		const addressBHwCGSE = accounts[5]
		const addressRqZQvrc = accounts[4]
		const uintkAjCh0N = BigInt("1181")
		const uintF2a57yt = BigInt("449")
		const uint256ug3UFGS = await NasiLiquidityPoolFactoryfax8sH.updatePool.call(uintPeF3UVb, {from: accounts[0]});
		const addressZXyawxX = await NasiLiquidityPoolFactoryfax8sH.addMinter.call(addressBHwCGSE, {from: accounts[0]});
		const boolKqIH1R0 = await NasiLiquidityPoolFactoryfax8sH.paused.call({from: accounts[2]});
		const boolOwyOmPt = await NasiLiquidityPoolFactoryfax8sH.isPauser.call(addressRqZQvrc, {from: accounts[4]});
		const uint256fJM0QmS = await NasiLiquidityPoolFactoryfax8sH.withdraw.call(uintF2a57yt, uintkAjCh0N, {from: "0x0000000000000000000000000000000000000001"});
		const boolB9hGhqZ = await NasiLiquidityPoolFactoryfax8sH.paused.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringbGSqG8 = "sgcyqY0boDIp3faDekv"
		const stringwfoPZwG = "K9BOxTnv16GHAISDL19HcBYQz6k0LJkIX5e48EllHOoyd3xzOeopVaVAugzTlNuLQJiz9"
		const uintyN39j1 = BigInt("229")
		const NasiLiquidityPoolFactoryc9yfFfy = await NasiLiquidityPoolFactory.new(stringbGSqG8, stringwfoPZwG, uintyN39j1, {from: accounts[3]});
		const uintNJRNFJ8 = BigInt("456")
		const addressWM7GhaU = accounts[4]
		const uintuYFQwPk = BigInt("1569")
		const addressoggvF06 = accounts[2]
		const addressY33LLoe = accounts[1]
		const uintdHfUZRg = BigInt("1535")
		const stringwYf5gIO = await NasiLiquidityPoolFactoryc9yfFfy.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const bool1W01Hi = await NasiLiquidityPoolFactoryc9yfFfy.approve.call(addressWM7GhaU, uintNJRNFJ8, {from: accounts[2]});
		const boolsHwFllF = await NasiLiquidityPoolFactoryc9yfFfy.transferFrom.call(addressY33LLoe, addressoggvF06, uintuYFQwPk, {from: accounts[1]});
		const uint256dWKLSG4 = await NasiLiquidityPoolFactoryc9yfFfy.emergencyWithdraw.call(uintdHfUZRg, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressppESqNv = accounts[0]
		const addressXA6eVjW = accounts[1]
		const uintfvtrMZ1 = BigInt("1968")
		const uintt3ODBmP = BigInt("1251")
		const NasiLiquidityPoolFactoryh9qoTsm = await NasiLiquidityPoolFactory.new(addressppESqNv, addressXA6eVjW, uintfvtrMZ1, uintt3ODBmP, {from: accounts[3]});
		const address7chAYN = accounts[1]
		const uintgzJ6spx = BigInt("1653")
		const addresstptqq6f = accounts[1]
		const uintgxUlulo = BigInt("93")
		const uintirb9DaM = BigInt("622")
		const uintHiBu2hL = BigInt("637")
		const uintbDOjyb9 = BigInt("1350")
		const uintmC2116t = BigInt("654")
		const uintf4kkNrG = BigInt("426")
		const addressKjctGZw = await NasiLiquidityPoolFactoryh9qoTsm.setMigrator.call(address7chAYN, {from: accounts[5]});
		const boolsiOB8Vn = await NasiLiquidityPoolFactoryh9qoTsm.approve.call(addresstptqq6f, uintgzJ6spx, {from: accounts[0]});
		const uint256C8FY34 = await NasiLiquidityPoolFactoryh9qoTsm.burn.call(uintgxUlulo, {from: accounts[1]});
		const uint256z7tloM = await NasiLiquidityPoolFactoryh9qoTsm.deposit.call(uintHiBu2hL, uintirb9DaM, {from: accounts[3]});
		const uint256GVayzfy = await NasiLiquidityPoolFactoryh9qoTsm.leaveStaking.call(uintbDOjyb9, {from: accounts[2]});
		await NasiLiquidityPoolFactoryh9qoTsm.renouncePauser.call({from: accounts[1]});
		const uint256d5MsaFH = await NasiLiquidityPoolFactoryh9qoTsm.getBonusMultiplier.call(uintf4kkNrG, uintmC2116t, {from: accounts[1]});
		await NasiLiquidityPoolFactoryh9qoTsm.pause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string9zErbi = "iGZazLQRxlX2U"
		const string8LU6Oz = "Rfmx8hATOwdJPSVj7MsU38vgeKnsHG9e31ZuAkpb8Np9YDnCjLSsDLpF6Oe2"
		const uintzS2PDlM = BigInt("237")
		const NasiLiquidityPoolFactoryjKd7PuW = await NasiLiquidityPoolFactory.new(string9zErbi, string8LU6Oz, uintzS2PDlM, {from: accounts[2]});
		const uintTMxVlCe = BigInt("780")
		const uintAkr8nYv = BigInt("1378")
		const addressmOUDxUB = accounts[1]
		const uint256hoiMSVd = await NasiLiquidityPoolFactoryjKd7PuW.emergencyWithdraw.call(uintTMxVlCe, {from: accounts[0]});
		const boolITjK34V = await NasiLiquidityPoolFactoryjKd7PuW.transfer.call(addressmOUDxUB, uintAkr8nYv, {from: accounts[3]});
		await NasiLiquidityPoolFactoryjKd7PuW.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAVR8LAS = "ypberJvMpJ1VrUOmmIWnzwThEzCYmmtuASEm7GdZpoWqqBc2I4niOckngontCzrkVKerSsvNupFKdaoAIgLa9NhBQRYmB"
		const stringRCXFDyn = "aUTGVMvWeLLwjOT2MD1LmE3CkxAZToPkC9NTDRo3thl65q8N"
		const uint1IOMyP = BigInt("179")
		const NasiLiquidityPoolFactoryQ43fari = await NasiLiquidityPoolFactory.new(stringAVR8LAS, stringRCXFDyn, uint1IOMyP, {from: accounts[3]});
		const uintbdJ1jMk = BigInt("439")
		const uintIhyLg2c = BigInt("1653")
		const addressOHmxxL = accounts[3]
		const uintWGtwb62 = BigInt("907")
		const uintrs72Vew = BigInt("1159")
		const addressBp9WzVn = accounts[0]
		const boolQliokiz = false
		const uintDf2ja13 = BigInt("1878")
		const uintOOfvnin = BigInt("907")
		const uint256dnxJ3MF = await NasiLiquidityPoolFactoryQ43fari.leaveStaking.call(uintbdJ1jMk, {from: accounts[4]});
		const uint256hq3zy7 = await NasiLiquidityPoolFactoryQ43fari.getPriorVotes.call(addressOHmxxL, uintIhyLg2c, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oAZgu8y = await NasiLiquidityPoolFactoryQ43fari.burn.call(uintWGtwb62, {from: accounts[2]});
		await NasiLiquidityPoolFactoryQ43fari.renounceOwnership.call({from: accounts[1]});
		const boolMgrntrK = await NasiLiquidityPoolFactoryQ43fari.increaseAllowance.call(addressBp9WzVn, uintrs72Vew, {from: accounts[1]});
		const uint256vJQb05y = await NasiLiquidityPoolFactoryQ43fari.setAllocationPoint.call(uintOOfvnin, uintDf2ja13, boolQliokiz, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressoLUs1L2 = accounts[2]
		const addressziDLXOv = "0x0000000000000000000000000000000000000001"
		const uintKMbTLaY = BigInt("1120")
		const uintuP4umwE = BigInt("948")
		const NasiLiquidityPoolFactoryqLm0YzQ = await NasiLiquidityPoolFactory.new(addressoLUs1L2, addressziDLXOv, uintKMbTLaY, uintuP4umwE, {from: accounts[2]});
		const addressIQTl7o = accounts[4]
		const uintdWVYpST = BigInt("286")
		const uintMa9qocS = BigInt("382")
		const uintULXCGqb = BigInt("65")
		const addressGARJ1v = accounts[1]
		const addresszoJB4sS = accounts[5]
		const uintGTkEXD9 = BigInt("1867")
		const addressz3lahEl = accounts[2]
		const addressxYp17Yd = accounts[4]
		const addressKK1NjIY = accounts[0]
		const addresspCTrmor = accounts[4]
		const uint256vxLGFej = await NasiLiquidityPoolFactoryqLm0YzQ.pendingNasi.call(uintdWVYpST, addressIQTl7o, {from: accounts[3]});
		const uint2569pQiCe = await NasiLiquidityPoolFactoryqLm0YzQ.emergencyWithdraw.call(uintMa9qocS, {from: accounts[1]});
		const boolfiZDLa = await NasiLiquidityPoolFactoryqLm0YzQ.transferFrom.call(addresszoJB4sS, addressGARJ1v, uintULXCGqb, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryqLm0YzQ.renouncePauser.call({from: accounts[1]});
		const booloF4RGYO = await NasiLiquidityPoolFactoryqLm0YzQ.decreaseAllowance.call(addressz3lahEl, uintGTkEXD9, {from: accounts[4]});
		const uint256wxJS1ts = await NasiLiquidityPoolFactoryqLm0YzQ.allowance.call(addressKK1NjIY, addressxYp17Yd, {from: accounts[3]});
		const address4UHmNg = await NasiLiquidityPoolFactoryqLm0YzQ.setMigrator.call(addresspCTrmor, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUqFFbsy = accounts[4]
		const address4alwpR = accounts[2]
		const uintkpFc9Xk = BigInt("32")
		const uintXxCQcig = BigInt("1806")
		const NasiLiquidityPoolFactorytUMsV5a = await NasiLiquidityPoolFactory.new(addressUqFFbsy, address4alwpR, uintkpFc9Xk, uintXxCQcig, {from: accounts[4]});
		const uintkDWQWh7 = BigInt("177")
		const uintDHZVNpD = BigInt("1349")
		const addressAMWzK3p = "0x0000000000000000000000000000000000000001"
		const addresslFTuj8 = accounts[0]
		const uint256FrkdyRq = await NasiLiquidityPoolFactorytUMsV5a.leaveStaking.call(uintkDWQWh7, {from: accounts[3]});
		const boolSSMnrlw = await NasiLiquidityPoolFactorytUMsV5a.transfer.call(addressAMWzK3p, uintDHZVNpD, {from: accounts[0]});
		const addressPhINpMT = await NasiLiquidityPoolFactorytUMsV5a.transferOwnership.call(addresslFTuj8, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZ98SvUa = "o6sjgXSjCYmizgxeg884vsowAe5Bx8l1JmOhBv65nozM0igWKLGw6MtTk3Ev94vARVCH3G8"
		const stringIYOxFHu = "fGDhPFi2NvOGjJG"
		const uintHbWLO7F = BigInt("138")
		const NasiLiquidityPoolFactoryErURSWk = await NasiLiquidityPoolFactory.new(stringZ98SvUa, stringIYOxFHu, uintHbWLO7F, {from: accounts[3]});
		const addressSC3lnYr = accounts[2]
		const uintxvRp4kJ = BigInt("565")
		const addressI67p1pv = accounts[4]
		const uint256sb16ED = await NasiLiquidityPoolFactoryErURSWk.balanceOf.call(addressSC3lnYr, {from: accounts[3]});
		const uint256b9hBFMW = await NasiLiquidityPoolFactoryErURSWk.getPriorVotes.call(addressI67p1pv, uintxvRp4kJ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBRlOLZ6 = accounts[2]
		const addressV05tAsu = "0x0000000000000000000000000000000000000001"
		const uintJIXXhTM = BigInt("1120")
		const uintDp3ZG2h = BigInt("948")
		const NasiLiquidityPoolFactoryqLm0YzQ = await NasiLiquidityPoolFactory.new(addressBRlOLZ6, addressV05tAsu, uintJIXXhTM, uintDp3ZG2h, {from: accounts[2]});
		const uintWMEtDmu = BigInt("1943")
		const uintCWhCTti = BigInt("442")
		const addressE2d0qSz = "0x0000000000000000000000000000000000000001"
		const addressC5VkFo = accounts[1]
		const uint256LG5QYt6 = await NasiLiquidityPoolFactoryqLm0YzQ.migrate.call(uintWMEtDmu, {from: accounts[2]});
		const uint2569pQiCe = await NasiLiquidityPoolFactoryqLm0YzQ.emergencyWithdraw.call(uintCWhCTti, {from: accounts[1]});
		await NasiLiquidityPoolFactoryqLm0YzQ.onlyMinter.call({from: accounts[1]});
		const uint256wxJS1ts = await NasiLiquidityPoolFactoryqLm0YzQ.allowance.call(addressC5VkFo, addressE2d0qSz, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringK1R7FZB = "4xrsQXd6oiyFq1aHJqgy3eryHBNzebs7J6Hk0kCJ4684u88F35PJexAfQv1bZCh"
		const stringccfXDfE = "UNjOnibhYnq81wzrnGDpGXrYWjGOUlLfS1VYDFlcgS4ZERlRdhBHOUyDLEdNkkvoMHnwGAGNG9hexo6ylkssyDvJ1rR0Q"
		const uintMoTKZyt = BigInt("212")
		const NasiLiquidityPoolFactoryuHxbMG = await NasiLiquidityPoolFactory.new(stringK1R7FZB, stringccfXDfE, uintMoTKZyt, {from: accounts[0]});
		const uintmwVWflI = BigInt("1378")
		const string8a4ipA = await NasiLiquidityPoolFactoryuHxbMG.name.call({from: accounts[4]});
		const uint256rKJDDWq = await NasiLiquidityPoolFactoryuHxbMG.totalSupply.call({from: accounts[5]});
		const uint256gj2xKvx = await NasiLiquidityPoolFactoryuHxbMG.leaveStaking.call(uintmwVWflI, {from: accounts[3]});
		await NasiLiquidityPoolFactoryuHxbMG.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressTOokumV = accounts[5]
		const addressgPtffJS = accounts[2]
		const uintKicvk43 = BigInt("1896")
		const uintZBWT4jz = BigInt("1975")
		const NasiLiquidityPoolFactorysi62yN0 = await NasiLiquidityPoolFactory.new(addressTOokumV, addressgPtffJS, uintKicvk43, uintZBWT4jz, {from: "0x0000000000000000000000000000000000000001"});
		const byteLWzb00L = "0x0b141309010818081b020116170e1c15050915161c1b141204081d11020c1f02"
		const byteHBgBvy = "0x041711021b0e06190a190c0801041906080f12101a100719081602190b13130b"
		const uintjBDzRRU = BigInt("4")
		const uintff3nYf4 = BigInt("1314")
		const uintSRCaIJ = BigInt("1094")
		const addressl82OQ6I = accounts[4]
		const addresseRJgHtw = accounts[3]
		const addresszs58AY = accounts[2]
		await NasiLiquidityPoolFactorysi62yN0.pause.call({from: accounts[3]});
		const uint8lYR1FwD = await NasiLiquidityPoolFactorysi62yN0.decimals.call({from: accounts[0]});
		const 
Ac5Unc = await NasiLiquidityPoolFactorysi62yN0.delegateBySig.call(addressl82OQ6I, uintSRCaIJ, uintff3nYf4, uintjBDzRRU, byteHBgBvy, byteLWzb00L, {from: accounts[0]});
		const uint256srs4mwI = await NasiLiquidityPoolFactorysi62yN0.allowance.call(addresszs58AY, addresseRJgHtw, {from: accounts[4]});
		await NasiLiquidityPoolFactorysi62yN0.onlyPauser.call({from: accounts[1]});
	});
})