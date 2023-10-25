const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressMF1lpvu = accounts[0]
		const VotingTcAbCf = await Voting.new(addressMF1lpvu, {from: accounts[3]});
		const stringiy71Kg7 = "3MrpXb3FJ8UzmJEzxvIp5FnG4abj5jNcO"
		const stringeEK09Sd = "lc8kV8i8wQLbnB9dPSuMRzBjkeqMDbnKQ6ymRR3lYtOK2InkftwG6IvKonizQkipzo5gFpC3znvx6geuriFyM6cGSBtQwZaQ"
		const stringsJy7Kpr = "mMM5ejACCfVHqm7YCujMtj19KALS4AMSlwmnC11CHL3fHbL6y4IwXtvnSbAeckpSrwwEpo1F7RMNk8"
		const byte6deIrq = "0x200a180a08051a1e1710"
		const addresspLVa4Yw = accounts[2]
		const uintBlMWNvQ = BigInt("91")
		const addressSAS1N8 = accounts[3]
		const addressDdf2ejo = accounts[4]
		const uintM29i0I = BigInt("154")
		const addressj7HHVuC = "0x0000000000000000000000000000000000000001"
		const 
qqGcPJi = await VotingTcAbCf.createProposal.call(addresspLVa4Yw, byte6deIrq, stringsJy7Kpr, stringeEK09Sd, stringiy71Kg7, {from: accounts[2]});
		const boolwnzcYMB = await VotingTcAbCf.transferFrom.call(addressDdf2ejo, addressSAS1N8, uintBlMWNvQ, {from: accounts[4]});
		const uint256UUXDqWy = await VotingTcAbCf.totalSupplyAt.call(uintM29i0I, {from: accounts[2]});
		const addressUlkGZlF = await VotingTcAbCf.ownableUpgrade.call(addressj7HHVuC, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressmasKmUU = accounts[1]
		const VotingS6KCZA4 = await Voting.new(addressmasKmUU, {from: accounts[1]});
		const addressL3ZUd9c = accounts[2]
		const addressDMiBFY = accounts[2]
		const addressZRKHu0X = accounts[3]
		await VotingS6KCZA4.onlyOwner.call({from: accounts[4]});
		const boolxfAXeJ9 = await VotingS6KCZA4.isExchangeFactory.call(addressL3ZUd9c, {from: accounts[3]});
		const uint256hnEV9S8 = await VotingS6KCZA4.allowance.call(addressZRKHu0X, addressDMiBFY, {from: accounts[2]});
		await VotingS6KCZA4.renounceMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingpH3jfOi = await Voting.new({from: accounts[4]});
		const uintbwXoHCE = BigInt("875")
		const uintGQ1RfZt = BigInt("112")
		const uintao42b5E = BigInt("1500")
		const addressbUr3BWZ = accounts[1]
		const addresslrf2ytI = accounts[5]
		const addressTcOKrPS = accounts[0]
		await VotingpH3jfOi.renounceMinter.call({from: accounts[1]});
		const uint256uNQGKsQ = await VotingpH3jfOi.pause.call(uintbwXoHCE, {from: accounts[1]});
		const uint256SZJwFfq = await VotingpH3jfOi.burn.call(uintGQ1RfZt, {from: accounts[1]});
		const bool0H9B0P = await VotingpH3jfOi.transferFrom.call(addresslrf2ytI, addressbUr3BWZ, uintao42b5E, {from: accounts[0]});
		const boolGUsvznv = await VotingpH3jfOi.isValidStamperAddress.call(addressTcOKrPS, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressGjR6Vk = accounts[0]
		const Votingg8PIW6I = await Voting.new(addressGjR6Vk, {from: "0x0000000000000000000000000000000000000001"});
		const uintqfvx2qZ = BigInt("1494")
		const addressNbYtOoh = accounts[3]
		const addressvOvtne5 = "0x0000000000000000000000000000000000000001"
		const addresswJ9mNRK = await Votingg8PIW6I.owner.call({from: accounts[2]});
		const uint256HUw82C = await Votingg8PIW6I.balanceOfAt.call(addressNbYtOoh, uintqfvx2qZ, {from: accounts[3]});
		const boolkG6soGx = await Votingg8PIW6I.isVotingSystem.call(addressvOvtne5, {from: accounts[2]});
		const addressb1gOIRJ = await Votingg8PIW6I.getRegistryAddress.call({from: accounts[2]});
		const uint256CjnXj7Z = await Votingg8PIW6I.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressxDScS0Y = accounts[1]
		const VotinguYLctfO = await Voting.new(addressxDScS0Y, {from: accounts[2]});
		const addresskhyQFdn = accounts[0]
		const uintV6oFEnN = BigInt("1546")
		const addressBcLJzAV = accounts[1]
		const booltYwHnd6 = await VotinguYLctfO.isValidVerifierAddress.call(addresskhyQFdn, {from: accounts[3]});
		await VotinguYLctfO.renounceMinter.call({from: accounts[2]});
		const boolnhrFLBR = await VotinguYLctfO.decreaseAllowance.call(addressBcLJzAV, uintV6oFEnN, {from: accounts[3]});
		await VotinguYLctfO.onlyExchangeFactoryOrVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresstj915W6 = accounts[2]
		const VotingxvJMmcW = await Voting.new(addresstj915W6, {from: accounts[1]});
		const uintbz5idj = BigInt("1723")
		const addressCQExYIq = accounts[3]
		const addresswIQlVJ = accounts[1]
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintbz5idj, {from: "0x0000000000000000000000000000000000000001"});
		const boolVpXbuqJ = await VotingxvJMmcW.isOwner.call({from: accounts[2]});
		const booloIzdQOX = await VotingxvJMmcW.isValidOracleAddress.call(addressCQExYIq, {from: accounts[0]});
		const boolurzSGot = await VotingxvJMmcW.isExchangeFactory.call(addresswIQlVJ, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressIjiOMQo = accounts[4]
		const Votingh0EP54 = await Voting.new(addressIjiOMQo, {from: accounts[1]});
		const uintcoL6dj3 = BigInt("1171")
		const addressdGkhPpS = accounts[4]
		const uintWvwC6g4 = BigInt("469")
		const uintuIVrpgJ = BigInt("72")
		const addressIwSYyvP = accounts[0]
		const addressAEpBmG5 = accounts[3]
		const uint256xxWUsDZ = await Votingh0EP54.resolve.call(uintcoL6dj3, {from: accounts[4]});
		await Votingh0EP54.renounceMinter.call({from: accounts[0]});
		const boolWj57Ih = await Votingh0EP54.didAddressVote.call(uintWvwC6g4, addressdGkhPpS, {from: accounts[1]});
		const boolNHDplzF = await Votingh0EP54.approve.call(addressIwSYyvP, uintuIVrpgJ, {from: accounts[3]});
		const uint256Fyjllzi = await Votingh0EP54.balanceOf.call(addressAEpBmG5, {from: accounts[1]});
		const addressB3Huehs = await Votingh0EP54.getRegistryAddress.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressZEvlADT = accounts[2]
		const VotingffqFtpA = await Voting.new(addressZEvlADT, {from: accounts[4]});
		const addressoBBkSou = accounts[2]
		const uintlgjeXtU = BigInt("175")
		const addresss36gAcR = accounts[2]
		const uintlpe6tS = BigInt("970")
		const uintiYj2rHH = BigInt("989")
		const addressorDYe54 = accounts[4]
		const uintqYjMdgF = BigInt("745")
		const address5krHQJ = accounts[2]
		const bool1srU1p = await VotingffqFtpA.isValidStamperAddress.call(addressoBBkSou, {from: accounts[5]});
		const boolGijJ0Jb = await VotingffqFtpA.transfer.call(addresss36gAcR, uintlgjeXtU, {from: accounts[2]});
		const uint256BjEk7ef = await VotingffqFtpA.approve.call(uintlpe6tS, {from: accounts[1]});
		const boolqHRI8wU = await VotingffqFtpA.approve.call(addressorDYe54, uintiYj2rHH, {from: accounts[1]});
		const boolftJuqdN = await VotingffqFtpA.decreaseAllowance.call(address5krHQJ, uintqYjMdgF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingD36YoKv = await Voting.new({from: accounts[2]});
		const uintcuVVXJ7 = BigInt("154")
		const addressklxSRSl = accounts[4]
		const uintkKk6rGE = BigInt("803")
		const addressQu2BLgw = accounts[1]
		const addressxvKIRQI = accounts[4]
		const uintP8477ai = BigInt("116")
		const addressmZguuUf = accounts[1]
		const uintVVv1YmG = BigInt("1805")
		const addressNsJfF7C = accounts[2]
		const boolVSYAd3Y = await VotingD36YoKv.transfer.call(addressklxSRSl, uintcuVVXJ7, {from: accounts[2]});
		const boolUV1QytQ = await VotingD36YoKv.approve.call(addressQu2BLgw, uintkKk6rGE, {from: accounts[1]});
		const uint256DNeE54 = await VotingD36YoKv.totalSupply.call({from: accounts[3]});
		const uint256jvTH4tN = await VotingD36YoKv.balanceOf.call(addressxvKIRQI, {from: accounts[0]});
		const uint256uATbI95 = await VotingD36YoKv.balanceOfAt.call(addressmZguuUf, uintP8477ai, {from: "0x0000000000000000000000000000000000000001"});
		const boolc4oF8qI = await VotingD36YoKv.mint.call(addressNsJfF7C, uintVVv1YmG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressnCUXcq6 = accounts[2]
		const VotingffqFtpA = await Voting.new(addressnCUXcq6, {from: accounts[4]});
		const uintjhcYXiN = BigInt("989")
		const addressaiEipLA = accounts[2]
		const uintIFN1qD = BigInt("745")
		const addressjj8b9Di = accounts[1]
		const boolqHRI8wU = await VotingffqFtpA.approve.call(addressaiEipLA, uintjhcYXiN, {from: accounts[1]});
		const boolftJuqdN = await VotingffqFtpA.decreaseAllowance.call(addressjj8b9Di, uintIFN1qD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingouW20Fa = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSe06HPi = "0x0000000000000000000000000000000000000001"
		const uintJYZ0YyD = BigInt("467")
		const addressCdE5SzJ = accounts[0]
		const uintHq3juFL = BigInt("891")
		const addressnahstYc = accounts[2]
		const uint8gC7j5sD = await VotingouW20Fa.decimals.call({from: accounts[2]});
		const addressrlPdCaB = await VotingouW20Fa.ownableUpgrade.call(addressSe06HPi, {from: accounts[1]});
		await VotingouW20Fa.onlyOracle.call({from: accounts[1]});
		await VotingouW20Fa.onlyExchangeFactoryOrVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrBpgG8w = await VotingouW20Fa.transfer.call(addressCdE5SzJ, uintJYZ0YyD, {from: accounts[4]});
		const boolHuPiHud = await VotingouW20Fa.transfer.call(addressnahstYc, uintHq3juFL, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresskaxk5id = accounts[2]
		const VotingxvJMmcW = await Voting.new(addresskaxk5id, {from: accounts[1]});
		const addressdIIEN2 = accounts[1]
		const uintufCfKgV = BigInt("174")
		const addressQ6WwniF = accounts[2]
		const uintEurGknI = BigInt("1083")
		const booly5NIaGm = await VotingxvJMmcW.isExchangeFactory.call(addressdIIEN2, {from: accounts[0]});
		const boolxtSGQlU = await VotingxvJMmcW.decreaseAllowance.call(addressQ6WwniF, uintufCfKgV, {from: accounts[0]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintEurGknI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressWVEGX4i = accounts[2]
		const VotingxvJMmcW = await Voting.new(addressWVEGX4i, {from: accounts[1]});
		const addressBbEpmz = accounts[3]
		const uintf80m21i = BigInt("1569")
		const addressUaj7hr = accounts[4]
		const uintaXPtjP = BigInt("1711")
		const boolrj16sLL = await VotingxvJMmcW.isVotingSystem.call(addressBbEpmz, {from: accounts[4]});
		const boolLF1fLiB = await VotingxvJMmcW.increaseAllowance.call(addressUaj7hr, uintf80m21i, {from: accounts[0]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintaXPtjP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressdmJ7bTs = accounts[2]
		const VotingxvJMmcW = await Voting.new(addressdmJ7bTs, {from: accounts[1]});
		const uinttKZ7MYu = BigInt("492")
		const uintF13PEki = BigInt("1749")
		const uint256Sxov261 = await VotingxvJMmcW.veto.call(uinttKZ7MYu, {from: accounts[4]});
		await VotingxvJMmcW.onlyMinter.call({from: accounts[2]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintF13PEki, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingKoksFQ7 = await Voting.new({from: accounts[5]});
		const addressQTwDqgt = accounts[2]
		const addresskpUqCfb = "0x0000000000000000000000000000000000000001"
		await VotingKoksFQ7.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		const addressefVJ9iI = await VotingKoksFQ7.addMinter.call(addressQTwDqgt, {from: accounts[3]});
		await VotingKoksFQ7.nonReentrant.call({from: accounts[4]});
		const address56KPAI = await VotingKoksFQ7.ownableUpgrade.call(addresskpUqCfb, {from: accounts[0]});
		await VotingKoksFQ7.onlyMessageProcessor.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresskqZUeOn = accounts[2]
		const VotingxvJMmcW = await Voting.new(addresskqZUeOn, {from: accounts[1]});
		const boolb6pvG5L = true
		const uintxMSQwx = BigInt("286")
		const uintDYJok2z = BigInt("1718")
		const uint256zTi8MuD = await VotingxvJMmcW.vote.call(uintxMSQwx, boolb6pvG5L, {from: accounts[2]});
		await VotingxvJMmcW.renounceOwnership.call({from: accounts[3]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintDYJok2z, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressckqlwvB = accounts[2]
		const VotingxvJMmcW = await Voting.new(addressckqlwvB, {from: accounts[1]});
		const uintdBUEBE = BigInt("1808")
		const uintWXImEgY = BigInt("1508")
		const addressDJGc6Qx = accounts[0]
		const addresslxhZJs3 = accounts[0]
		const uintkm0opWP = BigInt("1746")
		const uint256quCqnTr = await VotingxvJMmcW.veto.call(uintdBUEBE, {from: accounts[1]});
		const boolmofN3cU = await VotingxvJMmcW.transferFrom.call(addresslxhZJs3, addressDJGc6Qx, uintWXImEgY, {from: accounts[1]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintkm0opWP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressirSvn5 = accounts[2]
		const VotingxvJMmcW = await Voting.new(addressirSvn5, {from: accounts[1]});
		const uintUkHkxMq = BigInt("1737")
		const addressh1dXe40 = "0x0000000000000000000000000000000000000001"
		const addressThCLv3v = accounts[0]
		const addressKK5RtDc = await VotingxvJMmcW.owner.call({from: accounts[0]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintUkHkxMq, {from: "0x0000000000000000000000000000000000000001"});
		const boolNZzqMT4 = await VotingxvJMmcW.isMinter.call(addressh1dXe40, {from: accounts[1]});
		const uint256KsBl9zw = await VotingxvJMmcW.balanceOf.call(addressThCLv3v, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingZvyWcJ8 = await Voting.new({from: accounts[1]});
		const addressjU1JSI7 = accounts[3]
		await VotingZvyWcJ8.onlyVotingSystem.call({from: accounts[0]});
		await VotingZvyWcJ8.onlyExchange.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yyTFkEJ = await VotingZvyWcJ8.balanceOf.call(addressjU1JSI7, {from: accounts[5]});
		const stringQT1W1Gf = await VotingZvyWcJ8.symbol.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingWOgXnDE = await Voting.new({from: accounts[3]});
		const addressFeYJu35 = accounts[1]
		const addresseMOH33X = accounts[4]
		const addressPTTBf0f = await VotingWOgXnDE.updateRegistry.call(addressFeYJu35, {from: accounts[1]});
		await VotingWOgXnDE.renounceMinter.call({from: accounts[2]});
		const boolZAcqnS = await VotingWOgXnDE.isVotingSystem.call(addresseMOH33X, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressYjQqJtZ = accounts[2]
		const VotingxvJMmcW = await Voting.new(addressYjQqJtZ, {from: accounts[1]});
		const addressncSHW1F = accounts[1]
		const uintQN1K0Dx = BigInt("1709")
		const boolLPwRNvr = await VotingxvJMmcW.isValidOracleAddress.call(addressncSHW1F, {from: accounts[0]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintQN1K0Dx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingN8aQyz = await Voting.new({from: accounts[0]});
		const addressQu6LRmX = accounts[5]
		const uintEzJymr6 = BigInt("789")
		const boolUalnW28 = await VotingN8aQyz.isValidVerifierAddress.call(addressQu6LRmX, {from: accounts[3]});
		await VotingN8aQyz.nonReentrant.call({from: accounts[4]});
		const uint256gmGgZjA = await VotingN8aQyz.totalSupplyAt.call(uintEzJymr6, {from: accounts[0]});
		const uint256bsXZwd = await VotingN8aQyz.snapshot.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresss1lGR7O = accounts[2]
		const VotingxvJMmcW = await Voting.new(addresss1lGR7O, {from: accounts[1]});
		const addressB6sdY81 = accounts[1]
		const uintck9bFeE = BigInt("1726")
		const addressL300vGD = accounts[5]
		const boolGsTl81T = await VotingxvJMmcW.isOwner.call({from: accounts[1]});
		const addressOkfS5BN = await VotingxvJMmcW.ownableUpgrade.call(addressB6sdY81, {from: accounts[1]});
		const uint256W14WgVv = await VotingxvJMmcW.pause.call(uintck9bFeE, {from: "0x0000000000000000000000000000000000000001"});
		const boolG78wXq = await VotingxvJMmcW.isValidStamperAddress.call(addressL300vGD, {from: accounts[1]});
	});
})