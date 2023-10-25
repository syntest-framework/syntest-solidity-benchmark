const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressY5XaR1 = accounts[0]
		const addressUIFCbbo = accounts[2]
		const uintcw6NgE0 = BigInt("1975")
		const uintDqoa8gO = BigInt("1401")
		const NasiLiquidityPoolFactoryCtgX0jq = await NasiLiquidityPoolFactory.new(addressY5XaR1, addressUIFCbbo, uintcw6NgE0, uintDqoa8gO, {from: accounts[4]});
		const addressT9d8UQh = accounts[0]
		await NasiLiquidityPoolFactoryCtgX0jq.renouncePauser.call({from: accounts[5]});
		const addressc6Rat8Q = await NasiLiquidityPoolFactoryCtgX0jq.delegate.call(addressT9d8UQh, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringL3rsHdW = "d29DC8gVSk0lyPBywOcFPLVwzcA8YSN1rx4h8wUs43Ouof1Pgo11lwh6Sg7"
		const stringFZnUANp = "Kjw6TIbwPcaEFhcHm4n2QSl4Rycvlnt5FZaABnUI3AHu"
		const uintPxpqhqS = BigInt("18")
		const NasiLiquidityPoolFactory6otElq = await NasiLiquidityPoolFactory.new(stringL3rsHdW, stringFZnUANp, uintPxpqhqS, {from: accounts[1]});
		const uinte67BaIj = BigInt("1240")
		const addressGRVKeNX = accounts[3]
		const addressBBAwIli = accounts[3]
		const uintpfWltDH = BigInt("1373")
		const uinty9Mhdty = BigInt("1667")
		const addressAklyRq = accounts[4]
		const stringk9Wsn2w = await NasiLiquidityPoolFactory6otElq.symbol.call({from: accounts[3]});
		const boolOBXbdKO = await NasiLiquidityPoolFactory6otElq.paused.call({from: accounts[1]});
		const boolr1Qgl3f = await NasiLiquidityPoolFactory6otElq.increaseAllowance.call(addressGRVKeNX, uinte67BaIj, {from: accounts[3]});
		const uint256pTvpTAj = await NasiLiquidityPoolFactory6otElq.pendingNasi.call(uintpfWltDH, addressBBAwIli, {from: accounts[5]});
		const addressWE0CWED = await NasiLiquidityPoolFactory6otElq.burnFrom.call(addressAklyRq, uinty9Mhdty, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUDUdAGH = "gTYm2SdbBLvEIwgxkSkkdi18ITGqJklvs4GGJqIzBR3HObLH5W6vuRB563pNtyYjQ54LETzeEcV3"
		const stringQRqIqCB = "XKtOI8spBGOM3LPUzt7Pd5XbbSSbjVMVCB9HHAVPaz3hYqiXXtHVn6xfEhh4I4l4hk1jNmzlf2RHIcYlsKrgbdhi1loD"
		const uintdHM3WVl = BigInt("94")
		const NasiLiquidityPoolFactoryVGPEwe = await NasiLiquidityPoolFactory.new(stringUDUdAGH, stringQRqIqCB, uintdHM3WVl, {from: accounts[3]});
		const uintOSIfbQN = BigInt("472")
		const uintPF2ETS3 = BigInt("314")
		const addressESnNAUt = accounts[0]
		const uint256qWfVV8F = await NasiLiquidityPoolFactoryVGPEwe.leaveStaking.call(uintOSIfbQN, {from: accounts[1]});
		await NasiLiquidityPoolFactoryVGPEwe.massUpdatePools.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryVGPEwe.onlyMinter.call({from: accounts[4]});
		const boolX25hJ1z = await NasiLiquidityPoolFactoryVGPEwe.transfer.call(addressESnNAUt, uintPF2ETS3, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringhreivE0 = "06nexxbihwCfI9j7RqpNnKLrPlZilVF6mnH2XtV7xKaGVB0TrMTArF0d36L2b85aytm4zL5"
		const stringBaiIvOJ = "nu5Op5GV1C3gsUXbxiVVCZxxE4OOzOsZoFlGlb"
		const uintkbJOwDO = BigInt("135")
		const NasiLiquidityPoolFactoryi5SL0mn = await NasiLiquidityPoolFactory.new(stringhreivE0, stringBaiIvOJ, uintkbJOwDO, {from: accounts[4]});
		const uinttnHTfWe = BigInt("1711")
		const addresswoSinyl = accounts[0]
		const addressYyMsKDe = accounts[3]
		const uintj3gR7xJ = BigInt("1745")
		const uintKuJ8BTC = BigInt("1795")
		const addressQLLvAn = accounts[1]
		const boolPHJ6Wyy = await NasiLiquidityPoolFactoryi5SL0mn.transferFrom.call(addressYyMsKDe, addresswoSinyl, uinttnHTfWe, {from: accounts[5]});
		const uint256cpNiQn = await NasiLiquidityPoolFactoryi5SL0mn.enterStaking.call(uintj3gR7xJ, {from: accounts[1]});
		await NasiLiquidityPoolFactoryi5SL0mn.renounceMinter.call({from: accounts[3]});
		const addressWXzfbO = await NasiLiquidityPoolFactoryi5SL0mn.owner.call({from: accounts[3]});
		const boolBkty0mE = await NasiLiquidityPoolFactoryi5SL0mn.decreaseAllowance.call(addressQLLvAn, uintKuJ8BTC, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtIBxxlJ = "4JQlhynIOuujDN1irul0hkWNkSFp8ybmtBSwltuleQO8nUZwbe8Rz1MOlMQ8P3GuJ"
		const stringlsZ02pk = "OHPPtLrJdrvvO2xL13YydNci0N"
		const uintYAMTP8 = BigInt("212")
		const NasiLiquidityPoolFactoryE6J6nWu = await NasiLiquidityPoolFactory.new(stringtIBxxlJ, stringlsZ02pk, uintYAMTP8, {from: accounts[0]});
		const uintxbaVRnk = BigInt("1972")
		const addressciMUhQL = accounts[1]
		const uintic6kVKk = BigInt("1534")
		const addressUJ0fwC3 = "0x0000000000000000000000000000000000000001"
		const addressGciD1Zl = accounts[4]
		const addresssHpKnQ4 = accounts[3]
		const addresskGBUh6G = accounts[0]
		const uintJU9ZU5q = BigInt("130")
		const uintK6OJSG = BigInt("1983")
		const uintMxlZgZf = BigInt("1043")
		const addressP7KdyXC = accounts[2]
		const booldpBgDs6 = await NasiLiquidityPoolFactoryE6J6nWu.increaseAllowance.call(addressciMUhQL, uintxbaVRnk, {from: accounts[3]});
		const boolZuHGKsE = await NasiLiquidityPoolFactoryE6J6nWu.mint.call(addressUJ0fwC3, uintic6kVKk, {from: accounts[4]});
		const uint256tiAO7X5 = await NasiLiquidityPoolFactoryE6J6nWu.allowance.call(addresssHpKnQ4, addressGciD1Zl, {from: accounts[3]});
		const uint25661ryML = await NasiLiquidityPoolFactoryE6J6nWu.getCurrentVotes.call(addresskGBUh6G, {from: accounts[2]});
		const 
yM9MVZz = await NasiLiquidityPoolFactoryE6J6nWu._writeCheckpoint.call(addressP7KdyXC, uintMxlZgZf, uintK6OJSG, uintJU9ZU5q, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringbWBGnt7 = "2rHsechGuywJSIKdkThFzga5ddW5Gzfz"
		const stringao286uG = "HRAxBdWguk23ed9qEpM3EPpngDE32xlK8NwcmkF5IWUHcAmLSwnKQ"
		const uintvGoyg5p = BigInt("119")
		const NasiLiquidityPoolFactoryh4REbm6 = await NasiLiquidityPoolFactory.new(stringbWBGnt7, stringao286uG, uintvGoyg5p, {from: accounts[3]});
		const uintjx7WXV = BigInt("1996")
		const addresszgXxsQo = accounts[5]
		const addressd7KwPf2 = accounts[4]
		const addressFyybuA2 = "0x0000000000000000000000000000000000000001"
		const boolv8W12Zy = true
		const uintWGSEgw5 = BigInt("432")
		const uintZabPqsE = BigInt("1241")
		const boolmniT4L0 = await NasiLiquidityPoolFactoryh4REbm6.transferFrom.call(addressd7KwPf2, addresszgXxsQo, uintjx7WXV, {from: accounts[3]});
		const addresst5O0Tel = await NasiLiquidityPoolFactoryh4REbm6.delegates.call(addressFyybuA2, {from: accounts[4]});
		const uint256MDErPnK = await NasiLiquidityPoolFactoryh4REbm6.setAllocationPoint.call(uintZabPqsE, uintWGSEgw5, boolv8W12Zy, {from: accounts[4]});
		await NasiLiquidityPoolFactoryh4REbm6.onlyMinter.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressktHaNkr = accounts[1]
		const addressSInBGz = "0x0000000000000000000000000000000000000001"
		const uintgqtcCIX = BigInt("1694")
		const uintwCNeKCA = BigInt("1870")
		const NasiLiquidityPoolFactorykpaMMcA = await NasiLiquidityPoolFactory.new(addressktHaNkr, addressSInBGz, uintgqtcCIX, uintwCNeKCA, {from: accounts[5]});
		const uintaxBCJDw = BigInt("1419")
		const uintrQ2PjUP = BigInt("1860")
		const addressdPlcbhp = accounts[3]
		const addressMd0j2Y4 = accounts[3]
		const uint256CFYw8tj = await NasiLiquidityPoolFactorykpaMMcA.getBonusMultiplier.call(uintrQ2PjUP, uintaxBCJDw, {from: accounts[2]});
		const uint256HvGlrtf = await NasiLiquidityPoolFactorykpaMMcA.totalSupply.call({from: accounts[0]});
		const uint256bnqnij6 = await NasiLiquidityPoolFactorykpaMMcA.getCurrentVotes.call(addressdPlcbhp, {from: accounts[1]});
		const addressmysG5Uk = await NasiLiquidityPoolFactorykpaMMcA.addPauser.call(addressMd0j2Y4, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringdNLnI4 = "cIHkJlIr4pwSudxdfViGI7MiS3UgaaKf2vUDJbuzG6ogJ4GoA6nNqUJKUBviyZWGi4oix0zOcRu6njDNQlN"
		const stringgPrqre = "192aerfujs5TveIN1n8x8hHKKI8XePwKISzDnGUsdRn3swjb1RYZc1nxJ3wsAqmbBSQraqBhuyx1fmVkn"
		const uintmSh6ouV = BigInt("40")
		const NasiLiquidityPoolFactoryLTMyocV = await NasiLiquidityPoolFactory.new(stringdNLnI4, stringgPrqre, uintmSh6ouV, {from: accounts[4]});
		const uintgfsLzUL = BigInt("556")
		const addressKkInIgk = accounts[4]
		const uintYwzxnkZ = BigInt("1817")
		const addressgiF4WSF = accounts[3]
		const uintJURoTFc = BigInt("1743")
		const uintCjtKW9d = BigInt("1199")
		const addresstLZxVNZ = accounts[3]
		const booli1ZAg3E = await NasiLiquidityPoolFactoryLTMyocV.mint.call(addressKkInIgk, uintgfsLzUL, {from: accounts[3]});
		const uint256O7IeK6k = await NasiLiquidityPoolFactoryLTMyocV.getPriorVotes.call(addressgiF4WSF, uintYwzxnkZ, {from: accounts[4]});
		await NasiLiquidityPoolFactoryLTMyocV.pause.call({from: accounts[5]});
		const boolvgaeRl6 = await NasiLiquidityPoolFactoryLTMyocV.paused.call({from: accounts[2]});
		const uint256f5rs7On = await NasiLiquidityPoolFactoryLTMyocV.getBonusMultiplier.call(uintCjtKW9d, uintJURoTFc, {from: accounts[1]});
		const uint256X9dA8ov = await NasiLiquidityPoolFactoryLTMyocV.balanceOf.call(addresstLZxVNZ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressvfiWefp = accounts[2]
		const addressk8t43jk = accounts[3]
		const uintQLq3vj5 = BigInt("246")
		const uinth7oE9Zs = BigInt("484")
		const NasiLiquidityPoolFactorygyhmHxB = await NasiLiquidityPoolFactory.new(addressvfiWefp, addressk8t43jk, uintQLq3vj5, uinth7oE9Zs, {from: "0x0000000000000000000000000000000000000001"});
		const uintk9WZpl0 = BigInt("535")
		const addressg2yxXD6 = accounts[4]
		const uintlY0sJ4j = BigInt("1905")
		const uintwbHQte6 = BigInt("650")
		const addresswjN9ue5 = accounts[1]
		const addresscsWwdNr = accounts[0]
		const addressQGO06xX = "0x0000000000000000000000000000000000000001"
		const uint256OC1pQCg = await NasiLiquidityPoolFactorygyhmHxB.enterStaking.call(uintk9WZpl0, {from: "0x0000000000000000000000000000000000000001"});
		const addressqnJg0e = await NasiLiquidityPoolFactorygyhmHxB.setMigrator.call(addressg2yxXD6, {from: accounts[0]});
		const uint256NxMFM1P = await NasiLiquidityPoolFactorygyhmHxB.withdraw.call(uintwbHQte6, uintlY0sJ4j, {from: accounts[2]});
		const addresszr94Xlj = await NasiLiquidityPoolFactorygyhmHxB.transferOwnership.call(addresswjN9ue5, {from: accounts[4]});
		const addressDTAzDEU = await NasiLiquidityPoolFactorygyhmHxB._delegate.call(addressQGO06xX, addresscsWwdNr, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJrclcQ = accounts[1]
		const addressHbuIjN6 = "0x0000000000000000000000000000000000000001"
		const uintjTNooCJ = BigInt("1694")
		const uinttIeUTEj = BigInt("1870")
		const NasiLiquidityPoolFactorykpaMMcA = await NasiLiquidityPoolFactory.new(addressJrclcQ, addressHbuIjN6, uintjTNooCJ, uinttIeUTEj, {from: accounts[5]});
		const uintrD6xfpg = BigInt("81")
		const uintARv9Cje = BigInt("1419")
		const uintl8WDnV1 = BigInt("1860")
		const addresss4omu68 = accounts[4]
		const addressCSfU2G = accounts[3]
		const uint256cLqG1WZ = await NasiLiquidityPoolFactorykpaMMcA.emergencyWithdraw.call(uintrD6xfpg, {from: accounts[4]});
		const uint256CFYw8tj = await NasiLiquidityPoolFactorykpaMMcA.getBonusMultiplier.call(uintl8WDnV1, uintARv9Cje, {from: accounts[2]});
		const uint256HvGlrtf = await NasiLiquidityPoolFactorykpaMMcA.totalSupply.call({from: accounts[0]});
		const uint256bnqnij6 = await NasiLiquidityPoolFactorykpaMMcA.getCurrentVotes.call(addresss4omu68, {from: accounts[1]});
		const addressmysG5Uk = await NasiLiquidityPoolFactorykpaMMcA.addPauser.call(addressCSfU2G, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressS6pXgp = accounts[3]
		const addressaijZgSd = accounts[3]
		const uintK3dzuhI = BigInt("1796")
		const uintWxQjKVO = BigInt("512")
		const NasiLiquidityPoolFactorymCpXPH = await NasiLiquidityPoolFactory.new(addressS6pXgp, addressaijZgSd, uintK3dzuhI, uintWxQjKVO, {from: accounts[0]});
		const uintee872xl = BigInt("1235")
		const uintQDW4req = BigInt("646")
		const uintsKXGdXV = BigInt("400")
		const addressuMBLGgl = accounts[2]
		const addressK2kckoM = accounts[4]
		const addressUzSZr4V = accounts[1]
		const uint256YovWFx = await NasiLiquidityPoolFactorymCpXPH.updatePool.call(uintee872xl, {from: accounts[2]});
		const uint256dZatraM = await NasiLiquidityPoolFactorymCpXPH.getBonusMultiplier.call(uintsKXGdXV, uintQDW4req, {from: accounts[0]});
		const addressO7YpwoO = await NasiLiquidityPoolFactorymCpXPH.addMinter.call(addressuMBLGgl, {from: accounts[3]});
		await NasiLiquidityPoolFactorymCpXPH.renounceMinter.call({from: accounts[3]});
		const addressw0mbUL2 = await NasiLiquidityPoolFactorymCpXPH._delegate.call(addressUzSZr4V, addressK2kckoM, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresseniEde8 = accounts[0]
		const addressLIMhLLv = accounts[2]
		const uintpOkwNY = BigInt("1975")
		const uintyvf8RBW = BigInt("1401")
		const NasiLiquidityPoolFactoryCtgX0jq = await NasiLiquidityPoolFactory.new(addresseniEde8, addressLIMhLLv, uintpOkwNY, uintyvf8RBW, {from: accounts[4]});
		const addresskKi4igr = await NasiLiquidityPoolFactoryCtgX0jq.owner.call({from: accounts[0]});
		const boolKciMYDx = await NasiLiquidityPoolFactoryCtgX0jq.paused.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryCtgX0jq.renouncePauser.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCj3qz1A = "rSCjNlGRtycJYWbvqxmpHjkSzOyVkrRmvYJfTHT2xfjoMd6EOSsouzYwauOtnedAvDd5BtU5nb5JcE"
		const stringnVGuhqa = "mmQJXk550"
		const uintn40wnKO = BigInt("81")
		const NasiLiquidityPoolFactoryUN87WCy = await NasiLiquidityPoolFactory.new(stringCj3qz1A, stringnVGuhqa, uintn40wnKO, {from: accounts[2]});
		const uintX80rse4 = BigInt("394")
		const uintNywRpaj = BigInt("1424")
		const bytexE6xO3s = "0x171c1c030916151f180f051a1817081017091b150e0e0c1703191c1e17140f15"
		const byteP12KGeR = "0x0e110e061420190215021f0c1a130014171b0c1d19110f091016051601120b14"
		const uintSqrJDNw = BigInt("242")
		const uintxHsQr0n = BigInt("701")
		const uintIEqnghW = BigInt("1237")
		const addressgy0hqRb = accounts[3]
		const uint256btMWDzc = await NasiLiquidityPoolFactoryUN87WCy.totalSupply.call({from: accounts[4]});
		const stringQ76UgA1 = await NasiLiquidityPoolFactoryUN87WCy.name.call({from: accounts[5]});
		const uint256ab61vq5 = await NasiLiquidityPoolFactoryUN87WCy.deposit.call(uintNywRpaj, uintX80rse4, {from: accounts[5]});
		const 
szYXJSc = await NasiLiquidityPoolFactoryUN87WCy.delegateBySig.call(addressgy0hqRb, uintIEqnghW, uintxHsQr0n, uintSqrJDNw, byteP12KGeR, bytexE6xO3s, {from: accounts[4]});
		await NasiLiquidityPoolFactoryUN87WCy.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZ28QayU = accounts[1]
		const addressuYs4Hso = "0x0000000000000000000000000000000000000001"
		const uintRR4wW9r = BigInt("1694")
		const uintT94ZQWs = BigInt("1870")
		const NasiLiquidityPoolFactorykpaMMcA = await NasiLiquidityPoolFactory.new(addressZ28QayU, addressuYs4Hso, uintRR4wW9r, uintT94ZQWs, {from: accounts[5]});
		const uintFyThZCp = BigInt("1462")
		const uintD9FuzFE = BigInt("81")
		const uintRGqJaw7 = BigInt("1419")
		const uintDMGfXlf = BigInt("1860")
		const addressANKD0cC = accounts[4]
		const addressQiP75KR = accounts[3]
		const uintJYiPPDw = BigInt("1605")
		const addressHCaXazP = accounts[2]
		const uintllQj51 = BigInt("1392")
		const addressTrAQLOg = accounts[3]
		const uint256cYvrnjq = await NasiLiquidityPoolFactorykpaMMcA.migrate.call(uintFyThZCp, {from: accounts[0]});
		const uint256cLqG1WZ = await NasiLiquidityPoolFactorykpaMMcA.emergencyWithdraw.call(uintD9FuzFE, {from: accounts[4]});
		const uint256CFYw8tj = await NasiLiquidityPoolFactorykpaMMcA.getBonusMultiplier.call(uintDMGfXlf, uintRGqJaw7, {from: accounts[2]});
		const uint256HvGlrtf = await NasiLiquidityPoolFactorykpaMMcA.totalSupply.call({from: accounts[0]});
		const addressufpqGQX = await NasiLiquidityPoolFactorykpaMMcA.delegates.call(addressANKD0cC, {from: accounts[0]});
		const addressmysG5Uk = await NasiLiquidityPoolFactorykpaMMcA.addPauser.call(addressQiP75KR, {from: accounts[4]});
		const addressSFB5PNw = await NasiLiquidityPoolFactorykpaMMcA.burnFrom.call(addressHCaXazP, uintJYiPPDw, {from: accounts[2]});
		const boolgdbZ0YM = await NasiLiquidityPoolFactorykpaMMcA.mint.call(addressTrAQLOg, uintllQj51, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSIVc2ur = "2mripVFj2ewwA6Gp6Mnf4q4G3695oufpNQ0qC"
		const stringCDejLqV = "ZTIkjUAQ7o85OqQOqw3HWpVvqgJwTFc75EePaZaktEbAmvR2k9bpOFrGyTRSPSkIvMOgLve0GKZvyoSh2jKy6Af24XHhx3"
		const uintHoHCjXy = BigInt("239")
		const NasiLiquidityPoolFactorymQ5VjDP = await NasiLiquidityPoolFactory.new(stringSIVc2ur, stringCDejLqV, uintHoHCjXy, {from: accounts[1]});
		const uintQ89k2Vh = BigInt("1568")
		const addressQwZ707o = "0x0000000000000000000000000000000000000001"
		const uintzxXagi = BigInt("977")
		const addressiAkPvWK = accounts[4]
		await NasiLiquidityPoolFactorymQ5VjDP.onlyMinter.call({from: accounts[0]});
		const boolbk0oTrC = await NasiLiquidityPoolFactorymQ5VjDP.transfer.call(addressQwZ707o, uintQ89k2Vh, {from: accounts[4]});
		const uint256ucPMXFB = await NasiLiquidityPoolFactorymQ5VjDP.enterStaking.call(uintzxXagi, {from: accounts[4]});
		await NasiLiquidityPoolFactorymQ5VjDP.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IJRzzUM = await NasiLiquidityPoolFactorymQ5VjDP.balanceOf.call(addressiAkPvWK, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXKKUYjf = accounts[4]
		const addressusGAY9x = accounts[2]
		const uintEQxsYYk = BigInt("910")
		const uintuFkQTQT = BigInt("2005")
		const NasiLiquidityPoolFactoryTT7eEhK = await NasiLiquidityPoolFactory.new(addressXKKUYjf, addressusGAY9x, uintEQxsYYk, uintuFkQTQT, {from: accounts[4]});
		const bytebE3fJc = "0x081f0b1c19181417030e0f1d20031d1e061f1c01170918101a0d030f13150e1a"
		const byteuRpXFwi = "0x0b06011d0b0a1e02181f130c0f1e061012201a18181f1d0603120e071d151413"
		const uintXsGVfq4 = BigInt("114")
		const uintv4m3mHs = BigInt("1286")
		const uintlCEYZhV = BigInt("1917")
		const addressMu860xq = accounts[0]
		const uintxSk9sUz = BigInt("924")
		const boolzaGnyYM = await NasiLiquidityPoolFactoryTT7eEhK.isOwner.call({from: accounts[3]});
		const 
I1HHmbf = await NasiLiquidityPoolFactoryTT7eEhK.delegateBySig.call(addressMu860xq, uintlCEYZhV, uintv4m3mHs, uintXsGVfq4, byteuRpXFwi, bytebE3fJc, {from: accounts[4]});
		const uint256COvmb8 = await NasiLiquidityPoolFactoryTT7eEhK.leaveStaking.call(uintxSk9sUz, {from: accounts[0]});
		const stringL38eqjL = await NasiLiquidityPoolFactoryTT7eEhK.name.call({from: accounts[1]});
		await NasiLiquidityPoolFactoryTT7eEhK.unpause.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressVBVTaWO = accounts[3]
		const addressmkLI5lf = accounts[3]
		const uintZeNXttO = BigInt("1796")
		const uintp4SJtid = BigInt("512")
		const NasiLiquidityPoolFactorymCpXPH = await NasiLiquidityPoolFactory.new(addressVBVTaWO, addressmkLI5lf, uintZeNXttO, uintp4SJtid, {from: accounts[0]});
		const uintGMtykYq = BigInt("646")
		const uintq7Si3vy = BigInt("400")
		const addressZuXKbo1 = accounts[2]
		const addressOSo9jUg = accounts[4]
		const addressJCo6yty = "0x0000000000000000000000000000000000000001"
		const uintaJtHnvZ = BigInt("214")
		const addressnqaMRB2 = "0x0000000000000000000000000000000000000001"
		const addressVXwV5qi = accounts[2]
		const uint256dZatraM = await NasiLiquidityPoolFactorymCpXPH.getBonusMultiplier.call(uintq7Si3vy, uintGMtykYq, {from: accounts[0]});
		const addressO7YpwoO = await NasiLiquidityPoolFactorymCpXPH.addMinter.call(addressZuXKbo1, {from: accounts[3]});
		await NasiLiquidityPoolFactorymCpXPH.renounceMinter.call({from: accounts[3]});
		const addressw0mbUL2 = await NasiLiquidityPoolFactorymCpXPH._delegate.call(addressJCo6yty, addressOSo9jUg, {from: accounts[0]});
		const boolFBS5RN1 = await NasiLiquidityPoolFactorymCpXPH.transferFrom.call(addressVXwV5qi, addressnqaMRB2, uintaJtHnvZ, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTlzWtvO = "oiaQYIdHtFO8TechNyoe86YIQEkxeujPhH4TVMfT9h5CsxUG9ndd7oRqg09WEGhb0w133Eyl"
		const stringsgzDG9M = "N9X7G9qyVF7mR7JiXBZ7M0ga5fjNDFY3Hl9FQmLU8"
		const uintA9UO9f7 = BigInt("225")
		const NasiLiquidityPoolFactoryKRMtmVc = await NasiLiquidityPoolFactory.new(stringTlzWtvO, stringsgzDG9M, uintA9UO9f7, {from: accounts[0]});
		const uintxz3FFre = BigInt("1075")
		const addressOfnlzBt = accounts[1]
		const addresskPK9ypC = accounts[2]
		const boolLovmcmj = await NasiLiquidityPoolFactoryKRMtmVc.transferFrom.call(addresskPK9ypC, addressOfnlzBt, uintxz3FFre, {from: accounts[2]});
		await NasiLiquidityPoolFactoryKRMtmVc.massUpdatePools.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQgxVto4 = accounts[1]
		const addressLm53iBK = "0x0000000000000000000000000000000000000001"
		const uint9g5TcC = BigInt("1694")
		const uintxlCHmS6 = BigInt("1870")
		const NasiLiquidityPoolFactorykpaMMcA = await NasiLiquidityPoolFactory.new(addressQgxVto4, addressLm53iBK, uint9g5TcC, uintxlCHmS6, {from: accounts[5]});
		const addressWeG2PN0 = accounts[2]
		const uintkEqkdrn = BigInt("81")
		const uintuJkU06T = BigInt("1419")
		const uintgfjDUW = BigInt("1860")
		const addressSLFxPA = accounts[4]
		const addressWSpuwGu = accounts[1]
		await NasiLiquidityPoolFactorykpaMMcA.massUpdatePools.call({from: accounts[2]});
		const addressaEGYvkK = await NasiLiquidityPoolFactorykpaMMcA.addMinter.call(addressWeG2PN0, {from: accounts[0]});
		const uint256cLqG1WZ = await NasiLiquidityPoolFactorykpaMMcA.emergencyWithdraw.call(uintkEqkdrn, {from: accounts[4]});
		const uint256CFYw8tj = await NasiLiquidityPoolFactorykpaMMcA.getBonusMultiplier.call(uintgfjDUW, uintuJkU06T, {from: accounts[2]});
		const uint256HvGlrtf = await NasiLiquidityPoolFactorykpaMMcA.totalSupply.call({from: accounts[0]});
		const uint256bnqnij6 = await NasiLiquidityPoolFactorykpaMMcA.getCurrentVotes.call(addressSLFxPA, {from: accounts[1]});
		const addressmysG5Uk = await NasiLiquidityPoolFactorykpaMMcA.addPauser.call(addressWSpuwGu, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMKuXAty = accounts[3]
		const addresswLJDZB6 = accounts[3]
		const uintJ3LrauK = BigInt("1796")
		const uintV9EHmqT = BigInt("512")
		const NasiLiquidityPoolFactorymCpXPH = await NasiLiquidityPoolFactory.new(addressMKuXAty, addresswLJDZB6, uintJ3LrauK, uintV9EHmqT, {from: accounts[0]});
		const uint34wYSA = BigInt("646")
		const uintEJnAqrx = BigInt("400")
		const uintxtIGksy = BigInt("1629")
		const uintGIknAHP = BigInt("1302")
		const addressMXltUe = accounts[2]
		const addressYqq6Gmy = accounts[4]
		const addressCWg7pK = "0x0000000000000000000000000000000000000001"
		const uintepWp4NE = BigInt("214")
		const addressFE0Wbon = "0x0000000000000000000000000000000000000001"
		const address7kKdVF = accounts[2]
		const uint256dZatraM = await NasiLiquidityPoolFactorymCpXPH.getBonusMultiplier.call(uintEJnAqrx, uint34wYSA, {from: accounts[0]});
		const uint256VkerFb9 = await NasiLiquidityPoolFactorymCpXPH.withdraw.call(uintGIknAHP, uintxtIGksy, {from: accounts[4]});
		const addressO7YpwoO = await NasiLiquidityPoolFactorymCpXPH.addMinter.call(addressMXltUe, {from: accounts[3]});
		await NasiLiquidityPoolFactorymCpXPH.renounceMinter.call({from: accounts[3]});
		const addressw0mbUL2 = await NasiLiquidityPoolFactorymCpXPH._delegate.call(addressCWg7pK, addressYqq6Gmy, {from: accounts[0]});
		const boolFBS5RN1 = await NasiLiquidityPoolFactorymCpXPH.transferFrom.call(address7kKdVF, addressFE0Wbon, uintepWp4NE, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNTIBtTV = "Hfh6pnj92Lfzp1PTaO5YZrI1uUNizlMxodj6pgPTpznYlgWkbnodcAkKBbjxQ1CsI4oTHNcB2aDwwyk8jTorgufXn8IOZp"
		const stringlgVsWk4 = "rCkPekRNWfEQHVyIXbICx7fmh8f8Q32tLA76qrVc5ihZidw4OoNq4Gp1PKijf"
		const uintf4uUntK = BigInt("173")
		const NasiLiquidityPoolFactoryrklX0s = await NasiLiquidityPoolFactory.new(stringNTIBtTV, stringlgVsWk4, uintf4uUntK, {from: accounts[1]});
		const uintxM2yHrd = BigInt("1383")
		const addressIr55PVL = accounts[2]
		const addressdfLvhi = accounts[1]
		const uintAXyJW4Y = BigInt("1621")
		const addressHcsbARn = accounts[4]
		const boolAlbm1Rb = await NasiLiquidityPoolFactoryrklX0s.transferFrom.call(addressdfLvhi, addressIr55PVL, uintxM2yHrd, {from: accounts[0]});
		const boolInhM7hR = await NasiLiquidityPoolFactoryrklX0s.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Sxg6Gs = await NasiLiquidityPoolFactoryrklX0s.burn.call(uintAXyJW4Y, {from: accounts[1]});
		const uint256GnpKldA = await NasiLiquidityPoolFactoryrklX0s.balanceOf.call(addressHcsbARn, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRsNgwac = accounts[0]
		const addressMM76s8A = accounts[2]
		const uintHYEaUcw = BigInt("1975")
		const uintjdkasrY = BigInt("1401")
		const NasiLiquidityPoolFactoryCtgX0jq = await NasiLiquidityPoolFactory.new(addressRsNgwac, addressMM76s8A, uintHYEaUcw, uintjdkasrY, {from: accounts[4]});
		const uintAbSvwb = BigInt("1744")
		const uintnpjEIvP = BigInt("1907")
		const address9tuzlP = accounts[0]
		const boolZgFovnX = false
		const uintjaSh2jH = BigInt("58")
		const uintQ51CYmu = BigInt("606")
		const uint256TQNcOlt = await NasiLiquidityPoolFactoryCtgX0jq.getBonusMultiplier.call(uintnpjEIvP, uintAbSvwb, {from: accounts[2]});
		const addressc6Rat8Q = await NasiLiquidityPoolFactoryCtgX0jq.delegate.call(address9tuzlP, {from: accounts[0]});
		const uint256pvY3Tc9 = await NasiLiquidityPoolFactoryCtgX0jq.setAllocationPoint.call(uintQ51CYmu, uintjaSh2jH, boolZgFovnX, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringyAL4ghX = "xGunUwOZirnM4KT8lO9zAthCNtFfQ8b3mdHerNBF56q1mHl9UsxKMyYlDhnUBbwfXLn34tGcNK"
		const stringUrpv56s = "OzJiEZme4hTedffObLo4klPCDptDlwa"
		const uintcKO1lJb = BigInt("230")
		const NasiLiquidityPoolFactoryMkXYwuu = await NasiLiquidityPoolFactory.new(stringyAL4ghX, stringUrpv56s, uintcKO1lJb, {from: accounts[3]});
		const addresshxatQtI = accounts[2]
		const address31REkA = accounts[0]
		const uintG8wCQSP = BigInt("1939")
		const addressBDcv80A = accounts[2]
		const uintGVraRYR = BigInt("1175")
		const addressroSGOo = accounts[1]
		const uint256QffVP4V = await NasiLiquidityPoolFactoryMkXYwuu.allowance.call(address31REkA, addresshxatQtI, {from: accounts[0]});
		const boolr8Ae3J = await NasiLiquidityPoolFactoryMkXYwuu.transfer.call(addressBDcv80A, uintG8wCQSP, {from: accounts[1]});
		const boolfqqYf5Y = await NasiLiquidityPoolFactoryMkXYwuu.transfer.call(addressroSGOo, uintGVraRYR, {from: accounts[5]});
	});
})