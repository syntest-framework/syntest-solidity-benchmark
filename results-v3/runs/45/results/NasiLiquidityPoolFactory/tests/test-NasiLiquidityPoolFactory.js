const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslRhFE2n = accounts[1]
		const addressAwFM3I = accounts[0]
		const uintV6rgyl = BigInt("2011")
		const uintkOz7BM = BigInt("1329")
		const NasiLiquidityPoolFactoryXwRqUwD = await NasiLiquidityPoolFactory.new(addresslRhFE2n, addressAwFM3I, uintV6rgyl, uintkOz7BM, {from: accounts[4]});
		const uintjOs1mTB = BigInt("1856")
		const addressPxQFfH6 = accounts[5]
		const uintfGf1Ia9 = BigInt("1894")
		const addressYZ2O7xT = accounts[1]
		const addressPdPxc9 = accounts[0]
		const addressj6m7Xmq = accounts[5]
		const boolFsLQz5x = await NasiLiquidityPoolFactoryXwRqUwD.mint.call(addressPxQFfH6, uintjOs1mTB, {from: accounts[4]});
		const boolss4GCoS = await NasiLiquidityPoolFactoryXwRqUwD.mint.call(addressYZ2O7xT, uintfGf1Ia9, {from: accounts[0]});
		await NasiLiquidityPoolFactoryXwRqUwD.massUpdatePools.call({from: accounts[4]});
		const addressQakFKWk = await NasiLiquidityPoolFactoryXwRqUwD._delegate.call(addressj6m7Xmq, addressPdPxc9, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtciBrT = "7vAPDlKRWc8SwG7MId8Ga85J5XUuU"
		const stringqghfARk = "isUNbMHFKAfr9conz"
		const uintoqKk8bj = BigInt("106")
		const NasiLiquidityPoolFactoryOjhZSfG = await NasiLiquidityPoolFactory.new(stringtciBrT, stringqghfARk, uintoqKk8bj, {from: accounts[4]});
		const addressn6jUaR = accounts[0]
		const uintg3lI1uO = BigInt("1146")
		const uintJXvDnCS = BigInt("524")
		await NasiLiquidityPoolFactoryOjhZSfG.renouncePauser.call({from: accounts[0]});
		const addressr7k8YR2 = await NasiLiquidityPoolFactoryOjhZSfG.addPauser.call(addressn6jUaR, {from: accounts[4]});
		await NasiLiquidityPoolFactoryOjhZSfG.renounceMinter.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryOjhZSfG.whenPaused.call({from: accounts[0]});
		const uint256S0xMXW = await NasiLiquidityPoolFactoryOjhZSfG.deposit.call(uintJXvDnCS, uintg3lI1uO, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslVsUqct = accounts[3]
		const addressyx5i39v = accounts[3]
		const uintBgUDjBt = BigInt("1117")
		const uinteDSUTSn = BigInt("981")
		const NasiLiquidityPoolFactoryA4whBuH = await NasiLiquidityPoolFactory.new(addresslVsUqct, addressyx5i39v, uintBgUDjBt, uinteDSUTSn, {from: "0x0000000000000000000000000000000000000001"});
		const uintTv94tgw = BigInt("419")
		const uintjMWHEDr = BigInt("1557")
		const addressBzpXz7 = accounts[3]
		const uintTQ7W5OV = BigInt("680")
		const addressjTULT4I = accounts[4]
		const uintYkW73T = BigInt("1825")
		const addressu0Ieyz8 = accounts[3]
		const addressW8sL6ZO = accounts[2]
		const uint256bf4cg2n = await NasiLiquidityPoolFactoryA4whBuH.migrate.call(uintTv94tgw, {from: accounts[5]});
		const boolrh1cVhB = await NasiLiquidityPoolFactoryA4whBuH.increaseAllowance.call(addressBzpXz7, uintjMWHEDr, {from: accounts[2]});
		const boolfha8wym = await NasiLiquidityPoolFactoryA4whBuH.increaseAllowance.call(addressjTULT4I, uintTQ7W5OV, {from: accounts[1]});
		const uint256Now6nmb = await NasiLiquidityPoolFactoryA4whBuH.getPriorVotes.call(addressu0Ieyz8, uintYkW73T, {from: accounts[3]});
		await NasiLiquidityPoolFactoryA4whBuH.massUpdatePools.call({from: accounts[2]});
		const addressmxPHTFj = await NasiLiquidityPoolFactoryA4whBuH.dev.call(addressW8sL6ZO, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringB8WecYW = "Msfunh01P"
		const stringpy7E16j = "kVT5KjW9FFiUGUOY4bKCe"
		const uintyWTmDa = BigInt("81")
		const NasiLiquidityPoolFactoryqEjow0f = await NasiLiquidityPoolFactory.new(stringB8WecYW, stringpy7E16j, uintyWTmDa, {from: accounts[5]});
		const boolP0ykmdT = false
		const uinthtiKHMs = BigInt("176")
		const uintdgJ7gVz = BigInt("683")
		const uintLv9IIuB = BigInt("334")
		const addressWuwjPaS = accounts[2]
		const addressQAHsVrT = accounts[4]
		const uint256NZXg08 = await NasiLiquidityPoolFactoryqEjow0f.setAllocationPoint.call(uintdgJ7gVz, uinthtiKHMs, boolP0ykmdT, {from: accounts[3]});
		const uint256Wj7XFWw = await NasiLiquidityPoolFactoryqEjow0f.migrate.call(uintLv9IIuB, {from: accounts[4]});
		const addresstELiV83 = await NasiLiquidityPoolFactoryqEjow0f._delegate.call(addressQAHsVrT, addressWuwjPaS, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcf54bnp = "nimCxahYkSOvCSpo2xgBnbTGfU4SPCG4W88Er1x8wfek4UMJm8Fa58tjldp"
		const stringEqspAA1 = "kfpI79DRuCM55LH9xtw5wkOngsvLbTen8HHssOqnvkDl9IbMir5kekQJx5ry49"
		const uintvo50B3G = BigInt("233")
		const NasiLiquidityPoolFactoryp96GJ5z = await NasiLiquidityPoolFactory.new(stringcf54bnp, stringEqspAA1, uintvo50B3G, {from: accounts[0]});
		const uintM1dX9M0 = BigInt("118")
		const addresslcojaSZ = accounts[3]
		const uintaw7qqQR = BigInt("416")
		const addressvd7KJ6e = accounts[5]
		const boolFgJWDHP = true
		const addressvs1O4Vg = accounts[3]
		const uintvk6qhiK = BigInt("877")
		const boolVvtfZAs = await NasiLiquidityPoolFactoryp96GJ5z.decreaseAllowance.call(addresslcojaSZ, uintM1dX9M0, {from: accounts[4]});
		const uint256t8IBh24 = await NasiLiquidityPoolFactoryp96GJ5z.updatePool.call(uintaw7qqQR, {from: "0x0000000000000000000000000000000000000001"});
		const addressgX9ksHp = await NasiLiquidityPoolFactoryp96GJ5z.dev.call(addressvd7KJ6e, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HnzuHH = await NasiLiquidityPoolFactoryp96GJ5z.addLpToken.call(uintvk6qhiK, addressvs1O4Vg, boolFgJWDHP, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAdn0xF = "RH6KNLviWnZshJRttdHfGueMqGJlyeJ90"
		const stringwVc43ej = "O37d2hJWMX6EdnDnzrl8xwm5asiItFIYvvbyUfbSyuDN"
		const uint9US03o = BigInt("54")
		const NasiLiquidityPoolFactoryBTYGhCN = await NasiLiquidityPoolFactory.new(stringAdn0xF, stringwVc43ej, uint9US03o, {from: accounts[1]});
		const boolESyBJJG = false
		const uintbGIEh8K = BigInt("133")
		const uintsFXG0w = BigInt("591")
		const uintjffYJrE = BigInt("871")
		const addressxuEqjT = accounts[0]
		const addressOqdnveR = accounts[1]
		const uintieAAUZo = BigInt("1417")
		const address2UutMK = accounts[1]
		const addressEVkQeXB = accounts[3]
		const boolgmru5w = await NasiLiquidityPoolFactoryBTYGhCN.isOwner.call({from: accounts[1]});
		const uint256g31YAiC = await NasiLiquidityPoolFactoryBTYGhCN.setAllocationPoint.call(uintsFXG0w, uintbGIEh8K, boolESyBJJG, {from: accounts[3]});
		const boolVW05k4T = await NasiLiquidityPoolFactoryBTYGhCN.increaseAllowance.call(addressxuEqjT, uintjffYJrE, {from: accounts[2]});
		const boolaxymYMg = await NasiLiquidityPoolFactoryBTYGhCN.isPauser.call(addressOqdnveR, {from: "0x0000000000000000000000000000000000000001"});
		const boolMEBQ5Y = await NasiLiquidityPoolFactoryBTYGhCN.transferFrom.call(addressEVkQeXB, address2UutMK, uintieAAUZo, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringAICcqsn = "a"
		const stringzwe4JhS = "LB4lQ0M566PDUIWV9o3J76vhzEQXqJ98z8wVPoXbMOJB5BXjtB93Nf4xCReVHgUq"
		const uintaKF57nE = BigInt("26")
		const NasiLiquidityPoolFactoryreSgCQa = await NasiLiquidityPoolFactory.new(stringAICcqsn, stringzwe4JhS, uintaKF57nE, {from: accounts[3]});
		const uintEVTssd9 = BigInt("814")
		const addressQSPim0t = accounts[1]
		const bytetLE09Mc = "0x09060c15150117161e0b05051d20010c1301031011171614151b1d1810131520"
		const byterHuML1f = "0x091115081e1b0c030c08191309031e0c1c101c191c0609072020100200170b18"
		const uintBgICmKs = BigInt("91")
		const uintSdTzHcX = BigInt("1220")
		const uintDR5CGAS = BigInt("1456")
		const addressT0OfgZX = accounts[2]
		const uintMh6cUp6 = BigInt("430")
		const uintpRiAemT = BigInt("881")
		const addressBv8vBfL = accounts[0]
		await NasiLiquidityPoolFactoryreSgCQa.renouncePauser.call({from: accounts[2]});
		const boolLO3gzAc = await NasiLiquidityPoolFactoryreSgCQa.mint.call(addressQSPim0t, uintEVTssd9, {from: accounts[1]});
		const 
XPDmrm2 = await NasiLiquidityPoolFactoryreSgCQa.delegateBySig.call(addressT0OfgZX, uintDR5CGAS, uintSdTzHcX, uintBgICmKs, byterHuML1f, bytetLE09Mc, {from: accounts[4]});
		const uint256Wrwvrn6 = await NasiLiquidityPoolFactoryreSgCQa.withdraw.call(uintpRiAemT, uintMh6cUp6, {from: accounts[3]});
		const addresswmexZzi = await NasiLiquidityPoolFactoryreSgCQa.addMinter.call(addressBv8vBfL, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXxuxyJ = accounts[5]
		const address02fRuN = accounts[3]
		const uintTDqKSFL = BigInt("1447")
		const uintdM7mNj3 = BigInt("48")
		const NasiLiquidityPoolFactoryzMh1DQE = await NasiLiquidityPoolFactory.new(addressXxuxyJ, address02fRuN, uintTDqKSFL, uintdM7mNj3, {from: accounts[3]});
		const addressi9E6HIR = accounts[3]
		const uintmDlDnit = BigInt("209")
		const uintnSnJqMD = BigInt("544")
		const uintBdGojoU = BigInt("1809")
		const boolkKtSXt = true
		const addresstsCFyW = accounts[5]
		const uintMShPsgo = BigInt("1106")
		const uintL8c27Nc = BigInt("1669")
		const uintAGuRPJO = BigInt("1981")
		const uint256DL9h4s4 = await NasiLiquidityPoolFactoryzMh1DQE.pendingNasi.call(uintmDlDnit, addressi9E6HIR, {from: accounts[0]});
		await NasiLiquidityPoolFactoryzMh1DQE.renounceOwnership.call({from: accounts[2]});
		const uint256lEdWrb = await NasiLiquidityPoolFactoryzMh1DQE.withdraw.call(uintBdGojoU, uintnSnJqMD, {from: accounts[1]});
		const uint256Q1Up1u6 = await NasiLiquidityPoolFactoryzMh1DQE.addLpToken.call(uintMShPsgo, addresstsCFyW, boolkKtSXt, {from: accounts[4]});
		const uint256DHWc8IV = await NasiLiquidityPoolFactoryzMh1DQE.deposit.call(uintAGuRPJO, uintL8c27Nc, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringweSj6YL = "z0l6VTYIFsiwj6WDbEgYILVjuP1wTblGlrvgQz937bjA2mufEQbf4ydozBS7fgP9LA"
		const stringxhUSQe5 = "6ePgrAH5YLEMIgjzMohxfb9HZ725n4yeURHv84YV2ftXp4cwSc1NIjtkNuLx"
		const uintSHKhlSQ = BigInt("22")
		const NasiLiquidityPoolFactoryOBx0fYy = await NasiLiquidityPoolFactory.new(stringweSj6YL, stringxhUSQe5, uintSHKhlSQ, {from: accounts[1]});
		const addressjZRvzGh = accounts[3]
		const addressbzuDJTv = await NasiLiquidityPoolFactoryOBx0fYy.delegates.call(addressjZRvzGh, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryOBx0fYy.whenNotPaused.call({from: accounts[1]});
		const uint8ix2Czi = await NasiLiquidityPoolFactoryOBx0fYy.decimals.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresseHz5Rn = accounts[5]
		const addresscOEqWj = accounts[2]
		const uintZPisau = BigInt("1587")
		const uintdIf69bX = BigInt("1955")
		const NasiLiquidityPoolFactoryBWCwoNt = await NasiLiquidityPoolFactory.new(addresseHz5Rn, addresscOEqWj, uintZPisau, uintdIf69bX, {from: accounts[2]});
		const addressugGW76W = accounts[3]
		const uintf7b7yE = BigInt("669")
		const addressBXM4ENK = "0x0000000000000000000000000000000000000001"
		const addressTfibEdZ = accounts[1]
		const addressJbY4EcK = accounts[3]
		const boolHn9AaLY = true
		const uintx9M7wdZ = BigInt("294")
		const uintR4xj0hw = BigInt("1171")
		const addressTkmX0Wu = await NasiLiquidityPoolFactoryBWCwoNt.transferOwnership.call(addressugGW76W, {from: accounts[3]});
		const boolCDUdqcX = await NasiLiquidityPoolFactoryBWCwoNt.transferFrom.call(addressTfibEdZ, addressBXM4ENK, uintf7b7yE, {from: accounts[0]});
		const addressOrGWoaE = await NasiLiquidityPoolFactoryBWCwoNt.delegate.call(addressJbY4EcK, {from: accounts[1]});
		const uint256hi4N6xZ = await NasiLiquidityPoolFactoryBWCwoNt.setAllocationPoint.call(uintR4xj0hw, uintx9M7wdZ, boolHn9AaLY, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGrNhGJP = "Mh6PiDFetgf9"
		const stringXzoDqA = "t6JkFx"
		const uinteCV3WoE = BigInt("52")
		const NasiLiquidityPoolFactoryTMftzE = await NasiLiquidityPoolFactory.new(stringGrNhGJP, stringXzoDqA, uinteCV3WoE, {from: accounts[2]});
		const uintTRIDV80 = BigInt("1673")
		await NasiLiquidityPoolFactoryTMftzE.renouncePauser.call({from: accounts[4]});
		const stringv218LVW = await NasiLiquidityPoolFactoryTMftzE.name.call({from: accounts[2]});
		const uint256NViOjkI = await NasiLiquidityPoolFactoryTMftzE.burn.call(uintTRIDV80, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringIynk7KT = "QxgsSfoMAIxbadQbHgEQDoUbFPdrtfFS0rZEdGbPp6i"
		const stringKNzkybY = "6er5pRG5SploQxtF3hqnExb3R24oPvG3xk88sBML6KKj56IGeVxNub"
		const uintsf6SAlM = BigInt("160")
		const NasiLiquidityPoolFactoryPzKv9D5 = await NasiLiquidityPoolFactory.new(stringIynk7KT, stringKNzkybY, uintsf6SAlM, {from: accounts[2]});
		const uintO6cdXAX = BigInt("871")
		const uintK0CrGWI = BigInt("585")
		const uintHydGz9a = BigInt("1040")
		const addressSZlp0op = accounts[1]
		const uintEnT3Z5e = BigInt("443")
		const addressESLOZqS = accounts[1]
		const uint256SDoBRqv = await NasiLiquidityPoolFactoryPzKv9D5.getBonusMultiplier.call(uintK0CrGWI, uintO6cdXAX, {from: accounts[1]});
		const booleYTF5Mz = await NasiLiquidityPoolFactoryPzKv9D5.increaseAllowance.call(addressSZlp0op, uintHydGz9a, {from: accounts[3]});
		const boolTyrhSMR = await NasiLiquidityPoolFactoryPzKv9D5.mint.call(addressESLOZqS, uintEnT3Z5e, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcbF5Vv = "qVtsWcnzmuL41X3RI7jEu4XYbtW5C3R8cRvRdRDaycfyth82fRqbKkfJGfLM4QiCvgBSrMipe8oVVfY4vVMnHscQM4bL7saaTL"
		const stringdDwDHi5 = "CXkXQ7PJcqzFCLv9YwjRWXv"
		const uinth7OfvzQ = BigInt("210")
		const NasiLiquidityPoolFactoryygoYfbl = await NasiLiquidityPoolFactory.new(stringcbF5Vv, stringdDwDHi5, uinth7OfvzQ, {from: accounts[2]});
		const uint256aKmr6Ed = await NasiLiquidityPoolFactoryygoYfbl.totalSupply.call({from: accounts[1]});
		const boolM3l5ua = await NasiLiquidityPoolFactoryygoYfbl.isOwner.call({from: accounts[2]});
		const stringhMx5XIy = await NasiLiquidityPoolFactoryygoYfbl.symbol.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringergg0XJ = "YwYwhY66BpLMY4VEe32KLOnUncGILQzMmcscRJvLlOJSteE7NoDGAWWS6GebUkZjpWYpf1gqIBraVtzgg9hWumnuYt"
		const stringkVEMyrm = "X99pAmOVLKHbd3OkoQrT41NBVxQo733xXtFGN9FZDUuOsKx8PnNgY4vab5EknEekNNhlD5kDmSHtyEEo9Ax4m"
		const uintgkHLWn = BigInt("163")
		const NasiLiquidityPoolFactoryy7EJa0 = await NasiLiquidityPoolFactory.new(stringergg0XJ, stringkVEMyrm, uintgkHLWn, {from: accounts[5]});
		const addressKhGFtg = accounts[4]
		const addresspYV4cfP = accounts[1]
		const addressN9W9XwN = await NasiLiquidityPoolFactoryy7EJa0.delegates.call(addressKhGFtg, {from: accounts[2]});
		const uint256KrHgyc6 = await NasiLiquidityPoolFactoryy7EJa0.balanceOf.call(addresspYV4cfP, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringhbh2FDp = "xoIbUB7LqPz5sPAOnkIDJi6SGbycJkjK1LgsiA2BxbUlG3WSr5QPE9x6R128vXcwXn99IN"
		const stringo8qSrzl = "NXW7kSAWRvrW9BMR25ozShEBbIFefMgMBDYEmyXoJ7rMeG2hXliBPf1H6kreKpH5hr2scbwBCVbjqBcQN8fLbXgcrynvaBAPlwY"
		const uintRKuCpVs = BigInt("227")
		const NasiLiquidityPoolFactoryPViBdP1 = await NasiLiquidityPoolFactory.new(stringhbh2FDp, stringo8qSrzl, uintRKuCpVs, {from: accounts[1]});
		const uintVgMiYd = BigInt("1742")
		const uintHLyIwuw = BigInt("919")
		const uintSZWOB3V = BigInt("1724")
		const addressjXIkTFh = accounts[3]
		await NasiLiquidityPoolFactoryPViBdP1.unpause.call({from: accounts[3]});
		const 
RXojRgY = await NasiLiquidityPoolFactoryPViBdP1._writeCheckpoint.call(addressjXIkTFh, uintSZWOB3V, uintHLyIwuw, uintVgMiYd, {from: accounts[2]});
		await NasiLiquidityPoolFactoryPViBdP1.pause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJJ7F8LP = "NaQIWxeVTovwkPkc2wAlMD2jfuGxiR28b1jNyq3ZEASXyjc2cdMX"
		const stringsnf6en = "uWdcThuxQaX9Yc6DrOKcpHhhj3NLzJPtfIXRa4u3"
		const uintgrFxYMP = BigInt("8")
		const NasiLiquidityPoolFactorytNSDOc = await NasiLiquidityPoolFactory.new(stringJJ7F8LP, stringsnf6en, uintgrFxYMP, {from: accounts[0]});
		const uintnjTuQ0k = BigInt("1485")
		const uinttivymqN = BigInt("1029")
		const uintEb0ptTE = BigInt("135")
		const addressj2Ij28y = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactorytNSDOc.whenNotPaused.call({from: accounts[4]});
		await NasiLiquidityPoolFactorytNSDOc.onlyMinter.call({from: accounts[5]});
		const 
WI9q8En = await NasiLiquidityPoolFactorytNSDOc._writeCheckpoint.call(addressj2Ij28y, uintEb0ptTE, uinttivymqN, uintnjTuQ0k, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKpTSfwD = "27Uflj0gZcm"
		const stringF4k5Tu = "wkOjYIhxMOiytNb"
		const uintjcy0Sur = BigInt("135")
		const NasiLiquidityPoolFactoryjAEV8V = await NasiLiquidityPoolFactory.new(stringKpTSfwD, stringF4k5Tu, uintjcy0Sur, {from: accounts[4]});
		const uintTPYgzlc = BigInt("1786")
		const addressgZSl58M = accounts[0]
		const uintwOkQkS = BigInt("765")
		const addressGgl7rBK = accounts[4]
		const boolh6oAeHl = await NasiLiquidityPoolFactoryjAEV8V.transfer.call(addressgZSl58M, uintTPYgzlc, {from: accounts[2]});
		await NasiLiquidityPoolFactoryjAEV8V.renounceOwnership.call({from: accounts[0]});
		const boolURQpJS1 = await NasiLiquidityPoolFactoryjAEV8V.mint.call(addressGgl7rBK, uintwOkQkS, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSL07Tpm = "lZkKOFC633unt1X2hvB3IRrMCyswMBRGkU64"
		const stringLDTFCzQ = "FZSPA6vM9YiaVw5lbX8B2uTOzaKEE4XZiz7wrWjtLOSeLcZ499MwV"
		const uintddDreHi = BigInt("208")
		const NasiLiquidityPoolFactoryQInN6Ha = await NasiLiquidityPoolFactory.new(stringSL07Tpm, stringLDTFCzQ, uintddDreHi, {from: accounts[2]});
		const uintXkCqZ9a = BigInt("651")
		const addressrE4osin = accounts[4]
		const addressAG6qWrB = "0x0000000000000000000000000000000000000001"
		const address3Abu2i = accounts[4]
		const addressb6sJ2yZ = accounts[2]
		const uintnGJxv3G = BigInt("742")
		const addressK15rjC = accounts[3]
		const addressbVOVZ9C = accounts[0]
		const boolIzg8Q14 = await NasiLiquidityPoolFactoryQInN6Ha.transferFrom.call(addressAG6qWrB, addressrE4osin, uintXkCqZ9a, {from: accounts[2]});
		const uint256ZWAa71 = await NasiLiquidityPoolFactoryQInN6Ha.balanceOf.call(address3Abu2i, {from: accounts[4]});
		const addressajlD43B = await NasiLiquidityPoolFactoryQInN6Ha.delegate.call(addressb6sJ2yZ, {from: accounts[1]});
		const bool0xlYSd = await NasiLiquidityPoolFactoryQInN6Ha.transferFrom.call(addressbVOVZ9C, addressK15rjC, uintnGJxv3G, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringT3XEi2v = "ETKBEKPSh9MhVMQas6tU6CSdeicJbj4RmMATWxNtnGeNo2F6jlJFVTj9UCrajlOXUXqeID0"
		const stringZMxyjN = "NFwnqyt7BDv74cwMx5iENkQpbtTHHVy7sn7wt9KGyorILYIKux28qNjrADbqJpqErPGBmxPPBQ"
		const uintxdN9hGO = BigInt("2")
		const NasiLiquidityPoolFactoryNfrHYV9 = await NasiLiquidityPoolFactory.new(stringT3XEi2v, stringZMxyjN, uintxdN9hGO, {from: accounts[3]});
		const address0oeyN7 = accounts[1]
		const addressb5antBs = "0x0000000000000000000000000000000000000001"
		const uintIse1mGM = BigInt("1641")
		const boolJyNpx6H = await NasiLiquidityPoolFactoryNfrHYV9.isPauser.call(address0oeyN7, {from: accounts[3]});
		const boolt1j8QDY = await NasiLiquidityPoolFactoryNfrHYV9.isOwner.call({from: accounts[4]});
		const addresspTvlv8P = await NasiLiquidityPoolFactoryNfrHYV9.delegate.call(addressb5antBs, {from: accounts[5]});
		const uint256Xz8v22 = await NasiLiquidityPoolFactoryNfrHYV9.migrate.call(uintIse1mGM, {from: accounts[3]});
	});
})