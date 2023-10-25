const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressktlvRp = "0x0000000000000000000000000000000000000001"
		const addressCuX0yO6 = accounts[3]
		const uintfdzqGo3 = BigInt("587")
		const uintni65dH9 = BigInt("159")
		const NasiLiquidityPoolFactoryMi7rUh4 = await NasiLiquidityPoolFactory.new(addressktlvRp, addressCuX0yO6, uintfdzqGo3, uintni65dH9, {from: accounts[5]});
		const uintVmrS9NK = BigInt("1376")
		const addressqkhwppS = accounts[4]
		const addressA5uQPft = await NasiLiquidityPoolFactoryMi7rUh4.burnFrom.call(addressqkhwppS, uintVmrS9NK, {from: accounts[4]});
		await NasiLiquidityPoolFactoryMi7rUh4.pause.call({from: accounts[3]});
		const stringf98LPuV = await NasiLiquidityPoolFactoryMi7rUh4.name.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringl1DeA2a = "gAuDnpuOVcWgz4vYu"
		const stringwuuRxFG = "hRtCsCWvAz5DbefE8nWRqXzlCkfl2snOh6Ow6H17xtJqfmLtHgwtT4IA5MuiXv1Z7SG1V5ZzmFN"
		const uintjeJrl1 = BigInt("221")
		const NasiLiquidityPoolFactoryLF75vkE = await NasiLiquidityPoolFactory.new(stringl1DeA2a, stringwuuRxFG, uintjeJrl1, {from: accounts[0]});
		const addresscFn7Ve = accounts[0]
		const byteh6uv1N1 = "0x160b05121d0b0b08031c181000160e1f171e0b10061a1c090c130b17011b080a"
		const byteAP9PbPH = "0x151c0f04161c1b161c131313071c1a15100602151d100618180b090915120216"
		const uintn7sBEBR = BigInt("19")
		const uintcNjKKjD = BigInt("583")
		const uintzjk6Px = BigInt("347")
		const addresseNSu0Gy = accounts[3]
		const uintsSQv3E = BigInt("1096")
		const uintGBOD868 = BigInt("1071")
		const uintwjHimO = BigInt("804")
		const addressCCFtTo = await NasiLiquidityPoolFactoryLF75vkE.addPauser.call(addresscFn7Ve, {from: accounts[2]});
		const 
BsoECnB = await NasiLiquidityPoolFactoryLF75vkE.delegateBySig.call(addresseNSu0Gy, uintzjk6Px, uintcNjKKjD, uintn7sBEBR, byteAP9PbPH, byteh6uv1N1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VemzLOl = await NasiLiquidityPoolFactoryLF75vkE.emergencyWithdraw.call(uintsSQv3E, {from: accounts[1]});
		const uint256bozJW4G = await NasiLiquidityPoolFactoryLF75vkE.migrate.call(uintGBOD868, {from: accounts[0]});
		const uint256syxSW7m = await NasiLiquidityPoolFactoryLF75vkE.migrate.call(uintwjHimO, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQOTILla = "EfM5PcyuxBbii"
		const stringwTtU1ez = "GSmPiQq5jlTjcSxkb9a3lFqhCSlqo2TdkSMo4KH6erd2hOsqBxRAz7xGI9ulz3ekCBSFu9XgFERHhcTQ"
		const uintjvc4xYM = BigInt("149")
		const NasiLiquidityPoolFactoryJqao7PU = await NasiLiquidityPoolFactory.new(stringQOTILla, stringwTtU1ez, uintjvc4xYM, {from: "0x0000000000000000000000000000000000000001"});
		const uintUucPFJp = BigInt("359")
		const uintziDYbQs = BigInt("35")
		const addresse6Mx4NN = accounts[5]
		const uinto04bUwm = BigInt("155")
		const addressqrdyH4b = accounts[3]
		const uintRMLdBMy = BigInt("2023")
		const addressRsvieuZ = accounts[4]
		const uintda9R8Z7 = BigInt("1603")
		const addressTFqo5A = accounts[2]
		const uint256D7NkBiO = await NasiLiquidityPoolFactoryJqao7PU.emergencyWithdraw.call(uintUucPFJp, {from: accounts[4]});
		const booltvIZfYU = await NasiLiquidityPoolFactoryJqao7PU.approve.call(addresse6Mx4NN, uintziDYbQs, {from: accounts[5]});
		const boollvAesue = await NasiLiquidityPoolFactoryJqao7PU.transfer.call(addressqrdyH4b, uinto04bUwm, {from: accounts[3]});
		const boollDyo2Jr = await NasiLiquidityPoolFactoryJqao7PU.mint.call(addressRsvieuZ, uintRMLdBMy, {from: accounts[0]});
		const boolvHzIr0g = await NasiLiquidityPoolFactoryJqao7PU.approve.call(addressTFqo5A, uintda9R8Z7, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringOeOXnry = "TEph49ybtpW75pVtb5N2xc97WYmaIgFX6q0PNXoIyiEA1jeuPtLXrYWq"
		const stringFjXvIVN = "6F5vXoX2SJaQ00ZEtbcJzhaH5eu16MS567mvMh2VpxjD21MyBltJGUwtGzoSkAc8Oo"
		const uintVYaSxux = BigInt("246")
		const NasiLiquidityPoolFactoryUMQpvRE = await NasiLiquidityPoolFactory.new(stringOeOXnry, stringFjXvIVN, uintVYaSxux, {from: accounts[4]});
		const uinttNU2s6s = BigInt("839")
		const uintUyF1EfB = BigInt("1257")
		const address5OAR9H = accounts[1]
		const uintsFDVSYi = BigInt("1261")
		const uint256X4Tmkg5 = await NasiLiquidityPoolFactoryUMQpvRE.deposit.call(uintUyF1EfB, uinttNU2s6s, {from: accounts[4]});
		const uint256AyntqB = await NasiLiquidityPoolFactoryUMQpvRE.pendingNasi.call(uintsFDVSYi, address5OAR9H, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaarUHH = "PILwx1VdwD4s5GM5cbNIjhkkV8M9f"
		const stringbpSP8LS = "0l9Q4TAVEwkOiHkG4v3ItFIeMJ9tN"
		const uintmSrWZtk = BigInt("13")
		const NasiLiquidityPoolFactoryJj86M6 = await NasiLiquidityPoolFactory.new(stringaarUHH, stringbpSP8LS, uintmSrWZtk, {from: accounts[2]});
		const uintz1VCwBN = BigInt("1824")
		const uintBEvmXfM = BigInt("1712")
		const uint7kVQge = BigInt("812")
		const addressInhKvF = accounts[4]
		const 
qvrI4J5 = await NasiLiquidityPoolFactoryJj86M6._writeCheckpoint.call(addressInhKvF, uint7kVQge, uintBEvmXfM, uintz1VCwBN, {from: accounts[0]});
		await NasiLiquidityPoolFactoryJj86M6.whenPaused.call({from: accounts[3]});
		const boolGTiX3n = await NasiLiquidityPoolFactoryJj86M6.paused.call({from: accounts[4]});
		const addressdmjjFf2 = await NasiLiquidityPoolFactoryJj86M6.owner.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryJj86M6.whenPaused.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspDRCGa8 = accounts[3]
		const addressDz9D02a = accounts[5]
		const uintDfyKRRO = BigInt("1164")
		const uintkPDaXUt = BigInt("942")
		const NasiLiquidityPoolFactorys5JmQg = await NasiLiquidityPoolFactory.new(addresspDRCGa8, addressDz9D02a, uintDfyKRRO, uintkPDaXUt, {from: accounts[1]});
		const uintYDUpoPO = BigInt("1374")
		const uintizkAu5x = BigInt("739")
		const addresspxxHwNE = accounts[4]
		const addressvHZZAan = accounts[3]
		const uint256OxpQSJK = await NasiLiquidityPoolFactorys5JmQg.leaveStaking.call(uintYDUpoPO, {from: accounts[1]});
		await NasiLiquidityPoolFactorys5JmQg.renounceOwnership.call({from: accounts[2]});
		const boolFpuysQX = await NasiLiquidityPoolFactorys5JmQg.transferFrom.call(addressvHZZAan, addresspxxHwNE, uintizkAu5x, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressSdwbarf = accounts[0]
		const addressc6fsR4Q = accounts[2]
		const uintun9RsB = BigInt("1767")
		const uintELO5ky = BigInt("546")
		const NasiLiquidityPoolFactorylSLYeLh = await NasiLiquidityPoolFactory.new(addressSdwbarf, addressc6fsR4Q, uintun9RsB, uintELO5ky, {from: accounts[4]});
		const uintnMH9AJ = BigInt("843")
		const addressIAfH1J = accounts[0]
		const uintTf2sJMH = BigInt("1507")
		const addressnfXAF24 = accounts[4]
		const uint256iCSPbe = await NasiLiquidityPoolFactorylSLYeLh.migrate.call(uintnMH9AJ, {from: accounts[4]});
		await NasiLiquidityPoolFactorylSLYeLh.unpause.call({from: accounts[2]});
		const addressMFDOwmK = await NasiLiquidityPoolFactorylSLYeLh.dev.call(addressIAfH1J, {from: accounts[1]});
		const boolISEJiCK = await NasiLiquidityPoolFactorylSLYeLh.decreaseAllowance.call(addressnfXAF24, uintTf2sJMH, {from: accounts[1]});
		await NasiLiquidityPoolFactorylSLYeLh.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfoYBqT = "Ke0jDWHXStqEQjnB4dRqrWnwAaAmh"
		const stringtiWQXNm = "05m4E8AYIRId4uu195lGsdmOXSKs7rirWkMIOyTSzjEvQqupMaJsk5X1erWF"
		const uintAkEScgE = BigInt("41")
		const NasiLiquidityPoolFactoryH4auObN = await NasiLiquidityPoolFactory.new(stringfoYBqT, stringtiWQXNm, uintAkEScgE, {from: "0x0000000000000000000000000000000000000001"});
		const uintVzdLpyO = BigInt("1306")
		const addressdQUtmAc = accounts[2]
		const uintlRwvO5d = BigInt("440")
		const addressY96h1s = accounts[1]
		const boolZm9aiYR = await NasiLiquidityPoolFactoryH4auObN.transfer.call(addressdQUtmAc, uintVzdLpyO, {from: accounts[4]});
		const boolaDPSuEr = await NasiLiquidityPoolFactoryH4auObN.transfer.call(addressY96h1s, uintlRwvO5d, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXVrl0g = accounts[3]
		const addresszZwuJSy = accounts[5]
		const uintePVXAx8 = BigInt("1164")
		const uintwagkN7N = BigInt("942")
		const NasiLiquidityPoolFactorys5JmQg = await NasiLiquidityPoolFactory.new(addressXVrl0g, addresszZwuJSy, uintePVXAx8, uintwagkN7N, {from: accounts[1]});
		const uintMtnmmdW = BigInt("739")
		const addressZ4ATFvd = accounts[4]
		const addressYlDOD2b = accounts[0]
		await NasiLiquidityPoolFactorys5JmQg.renounceOwnership.call({from: accounts[2]});
		const boolFpuysQX = await NasiLiquidityPoolFactorys5JmQg.transferFrom.call(addressYlDOD2b, addressZ4ATFvd, uintMtnmmdW, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressom10mx = accounts[3]
		const addresspoMuWBD = accounts[5]
		const uintqcaNhd8 = BigInt("1164")
		const uintqGuqcNX = BigInt("942")
		const NasiLiquidityPoolFactorys5JmQg = await NasiLiquidityPoolFactory.new(addressom10mx, addresspoMuWBD, uintqcaNhd8, uintqGuqcNX, {from: accounts[1]});
		const uintO45CNaF = BigInt("1202")
		const uintw9mrXJ4 = BigInt("697")
		const uintGjfwIbC = BigInt("739")
		const addresshiZjfSC = accounts[4]
		const addressa2NiB6x = "0x0000000000000000000000000000000000000001"
		const uint256vtp24sA = await NasiLiquidityPoolFactorys5JmQg.withdraw.call(uintw9mrXJ4, uintO45CNaF, {from: accounts[0]});
		await NasiLiquidityPoolFactorys5JmQg.renounceOwnership.call({from: accounts[2]});
		const boolFpuysQX = await NasiLiquidityPoolFactorys5JmQg.transferFrom.call(addressa2NiB6x, addresshiZjfSC, uintGjfwIbC, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFeRxrt = "7fsg992UHmNtC9wcSmDJN2y0PjkRcIe5UxjxEUownBC4MQnW"
		const stringKk3sz0A = "yS8KCT6m6eacro3QoyEOJE6PHVl"
		const uintqjDLJ08 = BigInt("85")
		const NasiLiquidityPoolFactoryPINbp7Z = await NasiLiquidityPoolFactory.new(stringFeRxrt, stringKk3sz0A, uintqjDLJ08, {from: "0x0000000000000000000000000000000000000001"});
		const uintwbtX6VD = BigInt("132")
		const address98Ji2X = accounts[3]
		const uintwgFcXbb = BigInt("1209")
		const uintLkC4O3r = BigInt("1773")
		const uinta83y19s = BigInt("880")
		const boolsDsUmEB = await NasiLiquidityPoolFactoryPINbp7Z.approve.call(address98Ji2X, uintwbtX6VD, {from: accounts[0]});
		await NasiLiquidityPoolFactoryPINbp7Z.renouncePauser.call({from: accounts[3]});
		const uint256KSMVUyx = await NasiLiquidityPoolFactoryPINbp7Z.updatePool.call(uintwgFcXbb, {from: accounts[3]});
		const uint256S3onWt = await NasiLiquidityPoolFactoryPINbp7Z.deposit.call(uinta83y19s, uintLkC4O3r, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKrjnSD9 = accounts[1]
		const addressEscS551 = accounts[0]
		const uinto9yz9nq = BigInt("1244")
		const uintLW0lyaS = BigInt("1386")
		const NasiLiquidityPoolFactorykRRUCuE = await NasiLiquidityPoolFactory.new(addressKrjnSD9, addressEscS551, uinto9yz9nq, uintLW0lyaS, {from: accounts[3]});
		const uinthHeIEj = BigInt("430")
		const boolR7ZXysv = false
		const addressrRNYyC0 = accounts[2]
		const uintZchlOu = BigInt("1079")
		const uint256eOlK2PS = await NasiLiquidityPoolFactorykRRUCuE.enterStaking.call(uinthHeIEj, {from: accounts[0]});
		await NasiLiquidityPoolFactorykRRUCuE.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jNgPtV2 = await NasiLiquidityPoolFactorykRRUCuE.addLpToken.call(uintZchlOu, addressrRNYyC0, boolR7ZXysv, {from: accounts[4]});
		const stringIPEEXTe = await NasiLiquidityPoolFactorykRRUCuE.name.call({from: accounts[2]});
		const stringlHC6Kv8 = await NasiLiquidityPoolFactorykRRUCuE.symbol.call({from: accounts[0]});
		await NasiLiquidityPoolFactorykRRUCuE.unpause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkxIGJbw = "2CkkgNJktKkLFtPQJkk5ndNmf4vzUCQOeZan4vX2KjIG82un1NvTuxJd6pW8us7YJ"
		const stringcSvUJVv = "jZGxWQntih3VzHKitDxB97TL6mC9yjWU4ST"
		const uintDQ5MF2x = BigInt("168")
		const NasiLiquidityPoolFactorytriHjxS = await NasiLiquidityPoolFactory.new(stringkxIGJbw, stringcSvUJVv, uintDQ5MF2x, {from: accounts[2]});
		const uintgXN9XmD = BigInt("1117")
		const uintNzMcVeO = BigInt("889")
		const addressLNeYNnK = accounts[1]
		const uint256D3EJx3N = await NasiLiquidityPoolFactorytriHjxS.migrate.call(uintgXN9XmD, {from: accounts[0]});
		const uint256b3biofX = await NasiLiquidityPoolFactorytriHjxS.getPriorVotes.call(addressLNeYNnK, uintNzMcVeO, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgqg0q37 = "jin05KYN20174BhQEmO7X4oWN28EYc1OrLwIfKl"
		const stringjJB0Rcw = "g1BEZ9WkkoQs0Xh1WUhIFDQJKoh3X4319xKRqByg8yiKiDu3Pc9UJNu"
		const uintEqzoX7O = BigInt("25")
		const NasiLiquidityPoolFactoryiTCsUw = await NasiLiquidityPoolFactory.new(stringgqg0q37, stringjJB0Rcw, uintEqzoX7O, {from: accounts[3]});
		const uintMhqgnox = BigInt("667")
		const addressemO5TR5 = accounts[2]
		const boolSFKQQ8 = await NasiLiquidityPoolFactoryiTCsUw.approve.call(addressemO5TR5, uintMhqgnox, {from: accounts[4]});
		await NasiLiquidityPoolFactoryiTCsUw.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPhjMSY = "sj90ZvunzrNixFrRzZWloTNrDvAjR62twS6spceV0CVrCI5Qxbjd0OjuWYPDoBKxfb5Reoufcsd"
		const stringkxcbkxU = "xTCefe8kpdrngdf2cqWAyHdMscm9OcpWU"
		const uintwsnHRux = BigInt("162")
		const NasiLiquidityPoolFactorySs2rZQB = await NasiLiquidityPoolFactory.new(stringPhjMSY, stringkxcbkxU, uintwsnHRux, {from: accounts[1]});
		const addressb9kWkGY = accounts[1]
		const uintdsxIQrM = BigInt("1637")
		const addressypkh22 = accounts[1]
		const address3V5Gux = await NasiLiquidityPoolFactorySs2rZQB.delegate.call(addressb9kWkGY, {from: accounts[2]});
		await NasiLiquidityPoolFactorySs2rZQB.massUpdatePools.call({from: accounts[5]});
		const boolihJ9CYt = await NasiLiquidityPoolFactorySs2rZQB.approve.call(addressypkh22, uintdsxIQrM, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringxgNPdK6 = "jTAQ3vgKsfw89rAlTYPsRaPtnF8Rhnlz5DpPM1to5e7ZJqQDiFj1JNjyHG4X3Q5FIEToEDaIfhP9O54jxozKnJboAPTVW"
		const stringiYLkkG5 = "BEAiGAVbjlCRXcbxkmMjAVszdGUtTiAjl2itUf7FYUu5Lzw4UZjsLSmoTqJxLdF7AVKyQS34dUIcNuAtlLnMPyjp"
		const uintvIrbGHY = BigInt("166")
		const NasiLiquidityPoolFactoryADNb90e = await NasiLiquidityPoolFactory.new(stringxgNPdK6, stringiYLkkG5, uintvIrbGHY, {from: accounts[3]});
		const uintX5K2n3B = BigInt("576")
		const addressRAQy5fB = accounts[5]
		const addressnHyQN5z = accounts[2]
		const uintCgCO6Oi = BigInt("323")
		const uintj8XHulj = BigInt("272")
		const addressLsYWELK = accounts[4]
		const addressBXKYroX = accounts[2]
		const boolPH7Jsfv = false
		const addressyCwsujE = accounts[4]
		const uintKFHHozA = BigInt("1528")
		const boolExUqNaH = await NasiLiquidityPoolFactoryADNb90e.mint.call(addressRAQy5fB, uintX5K2n3B, {from: accounts[5]});
		const addressrPZwD5 = await NasiLiquidityPoolFactoryADNb90e.transferOwnership.call(addressnHyQN5z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RjVer2O = await NasiLiquidityPoolFactoryADNb90e.leaveStaking.call(uintCgCO6Oi, {from: accounts[3]});
		const boolLP77dud = await NasiLiquidityPoolFactoryADNb90e.transferFrom.call(addressBXKYroX, addressLsYWELK, uintj8XHulj, {from: accounts[2]});
		await NasiLiquidityPoolFactoryADNb90e.whenNotPaused.call({from: accounts[1]});
		const uint256p6c30oQ = await NasiLiquidityPoolFactoryADNb90e.addLpToken.call(uintKFHHozA, addressyCwsujE, boolPH7Jsfv, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGTNwTqg = "0x0000000000000000000000000000000000000001"
		const addressLckgbbV = accounts[3]
		const uintioAEzqr = BigInt("633")
		const uintvLPiyz7 = BigInt("891")
		const NasiLiquidityPoolFactorygiR4AoR = await NasiLiquidityPoolFactory.new(addressGTNwTqg, addressLckgbbV, uintioAEzqr, uintvLPiyz7, {from: "0x0000000000000000000000000000000000000001"});
		const uintcAAjaL = BigInt("625")
		const addressSLaM06O = accounts[4]
		const uintY0CnCrN = BigInt("681")
		const addressMQyEKt = accounts[3]
		const bytec12ajBZ = "0x1b01151f0e091b04050d0f0a1b0a081f0b09091411051b1f1a1f0a091719201a"
		const byte05u0QE = "0x0b0e0c120c0c16051c03021b1c0b101209130611051a02060d061a190b0b1815"
		const uintU8faa9B = BigInt("163")
		const uintzwpA3JE = BigInt("1439")
		const uintJiVJvfn = BigInt("1602")
		const addressJofD8wG = accounts[4]
		const boolXvfYSEh = true
		const addressY0Vm4Sb = accounts[4]
		const uinteFqmRMv = BigInt("426")
		const uintmX0EyjB = BigInt("1388")
		const uintUZ4xY0 = BigInt("726")
		const boolBpLlPjr = await NasiLiquidityPoolFactorygiR4AoR.decreaseAllowance.call(addressSLaM06O, uintcAAjaL, {from: accounts[2]});
		const boolfZmyTgl = await NasiLiquidityPoolFactorygiR4AoR.approve.call(addressMQyEKt, uintY0CnCrN, {from: "0x0000000000000000000000000000000000000001"});
		const 
NylDlv = await NasiLiquidityPoolFactorygiR4AoR.delegateBySig.call(addressJofD8wG, uintJiVJvfn, uintzwpA3JE, uintU8faa9B, byte05u0QE, bytec12ajBZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JTrPhJ9 = await NasiLiquidityPoolFactorygiR4AoR.addLpToken.call(uinteFqmRMv, addressY0Vm4Sb, boolXvfYSEh, {from: accounts[1]});
		const uint256vx7QJbM = await NasiLiquidityPoolFactorygiR4AoR.deposit.call(uintUZ4xY0, uintmX0EyjB, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQPL472Z = "Ic8G7FVcePciLx3lKhQHmf8wsbTZFc6v1UqExjNFGf4YozrYBjdq7Gy44hvNvR1FlWcBHkRdJdUANSNSmdUNlh"
		const stringhhWGyVG = "Ln8yJnFA27zbGjbcJrfy7F8nDAsQUTjGJd8O3ACDhEOp0qVqECeqaGgbGZHh0S3js3UvKQleaqWCKGfBobXzP"
		const uintUREOnjf = BigInt("3")
		const NasiLiquidityPoolFactoryfwszETc = await NasiLiquidityPoolFactory.new(stringQPL472Z, stringhhWGyVG, uintUREOnjf, {from: accounts[2]});
		await NasiLiquidityPoolFactoryfwszETc.whenNotPaused.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryfwszETc.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryfwszETc.renounceOwnership.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmasgNov = "oX6QRrQO"
		const stringk4xqx51 = "RCmsLUWsSci1YmFsoqfdV3X1N9IBdkpvR4eChrHceV9GyC8EgXiWzLxr1qxl9cBtj1g0Vkupsz"
		const uintpoFTEE = BigInt("20")
		const NasiLiquidityPoolFactoryqbwsKeD = await NasiLiquidityPoolFactory.new(stringmasgNov, stringk4xqx51, uintpoFTEE, {from: accounts[4]});
		const boolcEzDyGD = false
		const uintnplywCD = BigInt("1138")
		const uintC50epJ = BigInt("1790")
		const addressNxvWLy1 = accounts[4]
		const uintV4tjLci = BigInt("1915")
		const addressUBy22rc = accounts[0]
		const uint256E2YS6as = await NasiLiquidityPoolFactoryqbwsKeD.setAllocationPoint.call(uintC50epJ, uintnplywCD, boolcEzDyGD, {from: accounts[3]});
		await NasiLiquidityPoolFactoryqbwsKeD.renouncePauser.call({from: accounts[3]});
		const uint256ssChqLM = await NasiLiquidityPoolFactoryqbwsKeD.pendingNasi.call(uintV4tjLci, addressNxvWLy1, {from: accounts[0]});
		const addressQ3gXbOl = await NasiLiquidityPoolFactoryqbwsKeD.addMinter.call(addressUBy22rc, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKWnqhui = "ysUrIhEVd7MuB4KfK"
		const stringqKbXeY4 = "zHYx1LoSbc69xSj25PD0OVeIoCwmchmVGYtkPyRtmVxkMZp2XsT4Z3eE0NHiQnf34Z2K"
		const uintCmLoGda = BigInt("103")
		const NasiLiquidityPoolFactorypxUCQ1j = await NasiLiquidityPoolFactory.new(stringKWnqhui, stringqKbXeY4, uintCmLoGda, {from: accounts[0]});
		const uintwflqZ51 = BigInt("909")
		const uintkfXrEYT = BigInt("1768")
		const addressVk96DLv = accounts[0]
		const addresssskqRTH = accounts[3]
		const boold6Mca3M = false
		const uintHodfAfg = BigInt("1964")
		const uintOcZh2KC = BigInt("1072")
		const uintLO9HurI = BigInt("1130")
		const addressPCJxKse = accounts[4]
		const addressLBzGDpK = accounts[3]
		const uintSDQczAh = BigInt("700")
		const uint256gumyrs = await NasiLiquidityPoolFactorypxUCQ1j.withdraw.call(uintkfXrEYT, uintwflqZ51, {from: accounts[1]});
		const addressukaIWUm = await NasiLiquidityPoolFactorypxUCQ1j._delegate.call(addresssskqRTH, addressVk96DLv, {from: accounts[1]});
		const uint256oH7XV70 = await NasiLiquidityPoolFactorypxUCQ1j.setAllocationPoint.call(uintOcZh2KC, uintHodfAfg, boold6Mca3M, {from: accounts[0]});
		const boolt6Pqdpc = await NasiLiquidityPoolFactorypxUCQ1j.mint.call(addressPCJxKse, uintLO9HurI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RCY3Xub = await NasiLiquidityPoolFactorypxUCQ1j.balanceOf.call(addressLBzGDpK, {from: accounts[1]});
		const uint256nEToDLj = await NasiLiquidityPoolFactorypxUCQ1j.migrate.call(uintSDQczAh, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKMtnO2v = "qy78z80ZPQFCxSFimtGq39yDaGL1hd7IsVHuAwXk1lpaG8KJN7ELREUpXsanYrVJoHJTcHPfAAztDm9fGWN3vi2Pb"
		const stringX9uBnU = "QUqz5sbTWjRL"
		const uinthH8yTIQ = BigInt("250")
		const NasiLiquidityPoolFactorydPaAWl = await NasiLiquidityPoolFactory.new(stringKMtnO2v, stringX9uBnU, uinthH8yTIQ, {from: accounts[3]});
		const uintUhY4z7a = BigInt("792")
		const addresskm0cRmX = accounts[5]
		const addressUdBWDj = accounts[2]
		const addressHCF7nvP = accounts[0]
		const uintW03zUZJ = BigInt("222")
		const addressl1kQq2d = "0x0000000000000000000000000000000000000001"
		const booltH2yZYF = await NasiLiquidityPoolFactorydPaAWl.mint.call(addresskm0cRmX, uintUhY4z7a, {from: accounts[2]});
		const addressiDPyXwd = await NasiLiquidityPoolFactorydPaAWl.transferOwnership.call(addressUdBWDj, {from: accounts[4]});
		const stringWOgZaLD = await NasiLiquidityPoolFactorydPaAWl.name.call({from: accounts[2]});
		const addressDwl3Xxx = await NasiLiquidityPoolFactorydPaAWl.addPauser.call(addressHCF7nvP, {from: accounts[4]});
		const boolJiwXtZ8 = await NasiLiquidityPoolFactorydPaAWl.decreaseAllowance.call(addressl1kQq2d, uintW03zUZJ, {from: accounts[4]});
	});
})