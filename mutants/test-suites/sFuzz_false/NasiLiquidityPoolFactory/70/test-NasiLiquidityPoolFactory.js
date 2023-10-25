const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressfVGTRfJ = accounts[0]
		const addressi2w4Iai = accounts[3]
		const uintiHHgD9p = BigInt("28")
		const uintIkIpAwL = BigInt("1826")
		const NasiLiquidityPoolFactoryCKgD64o = await NasiLiquidityPoolFactory.new(addressfVGTRfJ, addressi2w4Iai, uintiHHgD9p, uintIkIpAwL, {from: accounts[5]});
		const uintoOlsbw7 = BigInt("24")
		const addressuhp5bkR = accounts[3]
		const uintne3om3 = BigInt("1247")
		const addressRP4qYFx = accounts[5]
		const addressv46nNlm = accounts[2]
		const addressskuzT3Z = accounts[2]
		const addressmuuN2ZG = await NasiLiquidityPoolFactoryCKgD64o.burnFrom.call(addressuhp5bkR, uintoOlsbw7, {from: accounts[0]});
		const uint256mx2kEVl = await NasiLiquidityPoolFactoryCKgD64o.getPriorVotes.call(addressRP4qYFx, uintne3om3, {from: accounts[4]});
		const addressnyfpd3I = await NasiLiquidityPoolFactoryCKgD64o.addPauser.call(addressv46nNlm, {from: accounts[2]});
		const addressYZCXl3 = await NasiLiquidityPoolFactoryCKgD64o.addMinter.call(addressskuzT3Z, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string5cygoY = "V2cer6QWbyjauHk5K6Mc2Cgwib8YAdC5QFsg93HWV8a"
		const stringPZJxOyl = "C2pQ112PVbd7NkijwIS7YzoVlqOD9LzMlByN2gHNrgvCPlRmuqGJyjgnqwnP1jtqREqyzImDYJYytybR"
		const uinthWT8dMn = BigInt("251")
		const NasiLiquidityPoolFactoryJz1Df7f = await NasiLiquidityPoolFactory.new(string5cygoY, stringPZJxOyl, uinthWT8dMn, {from: accounts[3]});
		const addresso5vCmeB = accounts[1]
		const uintJLDV0BK = BigInt("1388")
		const addressM9oNSZ8 = accounts[2]
		const addressgH1RksY = accounts[3]
		await NasiLiquidityPoolFactoryJz1Df7f.renouncePauser.call({from: accounts[0]});
		const uint256dYt9cAo = await NasiLiquidityPoolFactoryJz1Df7f.totalSupply.call({from: accounts[0]});
		const addresseFNUasQ = await NasiLiquidityPoolFactoryJz1Df7f.addMinter.call(addresso5vCmeB, {from: accounts[1]});
		const boolzULXbiu = await NasiLiquidityPoolFactoryJz1Df7f.transferFrom.call(addressgH1RksY, addressM9oNSZ8, uintJLDV0BK, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbOLV6bG = "0x0000000000000000000000000000000000000001"
		const addressWa3t0n3 = accounts[0]
		const uintM7e4Vcp = BigInt("656")
		const uintHOXm0VI = BigInt("2032")
		const NasiLiquidityPoolFactorytvp2LyR = await NasiLiquidityPoolFactory.new(addressbOLV6bG, addressWa3t0n3, uintM7e4Vcp, uintHOXm0VI, {from: accounts[4]});
		const uintyYM0Rlo = BigInt("1629")
		const uinthw4lbBy = BigInt("578")
		const uintqsFsg1f = BigInt("385")
		const address70bftF = accounts[0]
		const boolfMM7Th = true
		const address1JbLIA = accounts[3]
		const uintY9SMuPk = BigInt("139")
		const uint256UHhMepM = await NasiLiquidityPoolFactorytvp2LyR.updatePool.call(uintyYM0Rlo, {from: accounts[4]});
		const uint256MfMK6b = await NasiLiquidityPoolFactorytvp2LyR.migrate.call(uinthw4lbBy, {from: accounts[1]});
		const boolGYbYUra = await NasiLiquidityPoolFactorytvp2LyR.decreaseAllowance.call(address70bftF, uintqsFsg1f, {from: accounts[3]});
		const uint256L0cCmQZ = await NasiLiquidityPoolFactorytvp2LyR.addLpToken.call(uintY9SMuPk, address1JbLIA, boolfMM7Th, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvtBQBb = "zl1uFQ8hQjVfMBsDWAX7pmVTbzH9P8oX7Dlsoow9ekSrhjBSSxMSEbcXNowwdyja097yOPBK6XLybauyPPOzTl33i9VF"
		const stringNdtfGBl = "XVGuYFs1Bg2VD"
		const uintZcJOSzI = BigInt("40")
		const NasiLiquidityPoolFactoryxhVwSXj = await NasiLiquidityPoolFactory.new(stringvtBQBb, stringNdtfGBl, uintZcJOSzI, {from: accounts[4]});
		const booldfPU7ub = true
		const uintyPw3iPe = BigInt("1849")
		const uintb3gar9f = BigInt("1910")
		const boolIHJ6Trz = true
		const addressXzzXUE2 = accounts[0]
		const uintdPl9OHP = BigInt("557")
		const uint256RkJSQk4 = await NasiLiquidityPoolFactoryxhVwSXj.setAllocationPoint.call(uintb3gar9f, uintyPw3iPe, booldfPU7ub, {from: accounts[5]});
		const uint256d5Jl7K = await NasiLiquidityPoolFactoryxhVwSXj.addLpToken.call(uintdPl9OHP, addressXzzXUE2, boolIHJ6Trz, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnU50kJE = "cQWnSFtAEYcpHIRB10opaqqClM1OdbXnxkjKPRoKnNFSzRAvqKL4GWbzi31I5"
		const stringDU1XVmo = "CpPjzHyMHjeVsPMN33iDOCda8ekoHVjFmRAw"
		const uintKUErEXg = BigInt("83")
		const NasiLiquidityPoolFactoryptFDPF = await NasiLiquidityPoolFactory.new(stringnU50kJE, stringDU1XVmo, uintKUErEXg, {from: accounts[1]});
		const uintW05XeC5 = BigInt("71")
		const addressGyxI2Mk = "0x0000000000000000000000000000000000000001"
		const uintRtSCAo1 = BigInt("9")
		const addressDqeHo2 = accounts[3]
		const byteuDMiTr = "0x031a1d1d11090f0f100d120604171a1e1b16150f081d1f1b100d161012060b0c"
		const byteItBfAw5 = "0x05020a0910021b071c1b1b14100f1f1f0204100d131c030708061a0704180407"
		const uintEdgwusS = BigInt("248")
		const uintYsd10pl = BigInt("1745")
		const uintUpepjxx = BigInt("1369")
		const addressPku06qZ = accounts[0]
		const uintSIqlXt = BigInt("96")
		const uintgE51bou = BigInt("426")
		const boolQRQ2zgG = true
		const addressZn1bDTT = accounts[0]
		const uintgc8LtmS = BigInt("547")
		const boolJDVkGAr = await NasiLiquidityPoolFactoryptFDPF.transfer.call(addressGyxI2Mk, uintW05XeC5, {from: accounts[0]});
		const boolihzliaW = await NasiLiquidityPoolFactoryptFDPF.mint.call(addressDqeHo2, uintRtSCAo1, {from: accounts[1]});
		const 
zgCkD4S = await NasiLiquidityPoolFactoryptFDPF.delegateBySig.call(addressPku06qZ, uintUpepjxx, uintYsd10pl, uintEdgwusS, byteItBfAw5, byteuDMiTr, {from: accounts[2]});
		const uint256Fe3Z6hy = await NasiLiquidityPoolFactoryptFDPF.deposit.call(uintgE51bou, uintSIqlXt, {from: accounts[4]});
		await NasiLiquidityPoolFactoryptFDPF.pause.call({from: accounts[3]});
		const uint256ZaDtFyI = await NasiLiquidityPoolFactoryptFDPF.addLpToken.call(uintgc8LtmS, addressZn1bDTT, boolQRQ2zgG, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringoK6FdGI = "6mMOnADuquzOrDq0ihPmDLKSCYGl6keV52SCse01H9A3N5IXZw7msEpt"
		const stringgS5CPkK = "5k1ulFcyTblBNqa6LIPxyMqx8swC5I"
		const uintlZF58hL = BigInt("119")
		const NasiLiquidityPoolFactoryfw1Jbl2 = await NasiLiquidityPoolFactory.new(stringoK6FdGI, stringgS5CPkK, uintlZF58hL, {from: accounts[0]});
		const addressUZbbFj9 = accounts[4]
		const addressmJV3Osm = accounts[0]
		const uintzq27B2O = BigInt("3")
		const addressacZOs7O = accounts[2]
		const uintBYIzKn = BigInt("1426")
		const addresspYfkGQB = accounts[3]
		const addressfAeClcR = accounts[4]
		const addressVTa0KRv = await NasiLiquidityPoolFactoryfw1Jbl2._delegate.call(addressmJV3Osm, addressUZbbFj9, {from: accounts[2]});
		await NasiLiquidityPoolFactoryfw1Jbl2.renounceOwnership.call({from: accounts[5]});
		const uint256tFaAAGo = await NasiLiquidityPoolFactoryfw1Jbl2.getPriorVotes.call(addressacZOs7O, uintzq27B2O, {from: accounts[5]});
		const bool6ZDTTW = await NasiLiquidityPoolFactoryfw1Jbl2.transferFrom.call(addressfAeClcR, addresspYfkGQB, uintBYIzKn, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringiOBbzS8 = "6IVNc97LjdqipqZEFCmQQKiUCg8b8NDy481SJYg3f8kBrFn1BLCwC3CejzRA5BsGnEhLkt"
		const stringlyJeaea = "BXhNtNNXa79CjmpesJfucYbSIuOORf9nFF8io5w7kZbMhEo5S9CaL8QQrOzLNgq0fKKeDKB3f1Qo"
		const uinte0UxzZh = BigInt("138")
		const NasiLiquidityPoolFactoryVL2MLq5 = await NasiLiquidityPoolFactory.new(stringiOBbzS8, stringlyJeaea, uinte0UxzZh, {from: accounts[3]});
		const uint2atDVu = BigInt("1682")
		const addressTgQhw7L = accounts[0]
		const uintNzig4FZ = BigInt("1783")
		const uintjivz1Ky = BigInt("426")
		const addressgX2QTRr = accounts[1]
		const boolZBW25O4 = await NasiLiquidityPoolFactoryVL2MLq5.transfer.call(addressTgQhw7L, uint2atDVu, {from: accounts[3]});
		const uint256fNyRRL5 = await NasiLiquidityPoolFactoryVL2MLq5.leaveStaking.call(uintNzig4FZ, {from: accounts[0]});
		const boolkMUhDPZ = await NasiLiquidityPoolFactoryVL2MLq5.decreaseAllowance.call(addressgX2QTRr, uintjivz1Ky, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringURxkrmf = "zKypl9gVItQioB64fuRJqhPh4MVVht4uWE4rYtjwvSktKvesRVN"
		const stringoh5PJii = "0zxz4QMf4m2bG"
		const uintyQ1I1cx = BigInt("151")
		const NasiLiquidityPoolFactoryxZxdFa = await NasiLiquidityPoolFactory.new(stringURxkrmf, stringoh5PJii, uintyQ1I1cx, {from: accounts[5]});
		const addressMAaBJ0 = accounts[4]
		const uintqf9E8w = BigInt("1426")
		const boolAAQCDJa = true
		const uintqSYsalK = BigInt("1222")
		const uintxAUtTCF = BigInt("1705")
		const addressujQQNwZ = accounts[5]
		const uint256NatF3A = await NasiLiquidityPoolFactoryxZxdFa.pendingNasi.call(uintqf9E8w, addressMAaBJ0, {from: accounts[5]});
		const stringDWBqjH = await NasiLiquidityPoolFactoryxZxdFa.symbol.call({from: accounts[0]});
		const uint256s5cDEGa = await NasiLiquidityPoolFactoryxZxdFa.setAllocationPoint.call(uintxAUtTCF, uintqSYsalK, boolAAQCDJa, {from: accounts[4]});
		const addressgaDSMuE = await NasiLiquidityPoolFactoryxZxdFa.setMigrator.call(addressujQQNwZ, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZIOaKKs = "0x0000000000000000000000000000000000000001"
		const address4VWuwR = accounts[1]
		const uintH4PgRWg = BigInt("1687")
		const uintGu0s3oD = BigInt("54")
		const NasiLiquidityPoolFactoryuAQgJCD = await NasiLiquidityPoolFactory.new(addressZIOaKKs, address4VWuwR, uintH4PgRWg, uintGu0s3oD, {from: accounts[3]});
		const uinttNQ7ZC = BigInt("193")
		const uintazwMgA = BigInt("192")
		const boolJ5sP8AJ = false
		const addressThpa94 = accounts[3]
		const uintbuWoN1 = BigInt("1369")
		const uint256RyRBQLg = await NasiLiquidityPoolFactoryuAQgJCD.withdraw.call(uintazwMgA, uinttNQ7ZC, {from: accounts[5]});
		const uint256zkfUKaF = await NasiLiquidityPoolFactoryuAQgJCD.addLpToken.call(uintbuWoN1, addressThpa94, boolJ5sP8AJ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringxTBtebs = "0uzj1NB9JXjYbC7XV2rZbyipuiHA7efACLCSRdVu0GoxkiqlBXWIhGgrQjXkuhEy3L4nA8uwXMQCminuET6jxqlfLYCyONqA"
		const stringrOK9uqU = "LQYrVytAVQits72Q3wULXPquI19zVnYpDqZvzTdMUagw7cUP4Ta"
		const uintRn6hQKd = BigInt("9")
		const NasiLiquidityPoolFactoryDZ8T119 = await NasiLiquidityPoolFactory.new(stringxTBtebs, stringrOK9uqU, uintRn6hQKd, {from: accounts[0]});
		const uintCxlsxn = BigInt("1742")
		const addressDZ01ajC = accounts[0]
		const uintLxAfVsA = BigInt("660")
		const addressU9Q26wq = accounts[5]
		await NasiLiquidityPoolFactoryDZ8T119.renouncePauser.call({from: accounts[1]});
		const boolWJEYdSj = await NasiLiquidityPoolFactoryDZ8T119.decreaseAllowance.call(addressDZ01ajC, uintCxlsxn, {from: "0x0000000000000000000000000000000000000001"});
		const boollbcnpJP = await NasiLiquidityPoolFactoryDZ8T119.transfer.call(addressU9Q26wq, uintLxAfVsA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtypmeAC = "jhjDHrONwkoD3EO9Q3FpnDhBDoCxnMC6d1jaiFMXc641D1y1gXGKG"
		const stringBPaL8Cm = "uLj64qMw6LHJSCDmbS6SrWdtrJqOcv6DDfUMoGVkN8MTLIxt6yMHvLgUvbkr7R"
		const uintGmVaTTr = BigInt("129")
		const NasiLiquidityPoolFactoryL7BbBPR = await NasiLiquidityPoolFactory.new(stringtypmeAC, stringBPaL8Cm, uintGmVaTTr, {from: accounts[0]});
		const uintFIWkxkZ = BigInt("635")
		const addresshsUwds8 = accounts[1]
		const addressVGzPecg = "0x0000000000000000000000000000000000000001"
		const uintqLKfFCQ = BigInt("1815")
		const boolJ6thfgr = await NasiLiquidityPoolFactoryL7BbBPR.transferFrom.call(addressVGzPecg, addresshsUwds8, uintFIWkxkZ, {from: accounts[1]});
		await NasiLiquidityPoolFactoryL7BbBPR.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256i2lpaJz = await NasiLiquidityPoolFactoryL7BbBPR.burn.call(uintqLKfFCQ, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcfigQnX = "q5pjBKY9fIUmUFKVXr5"
		const stringgywLisb = "W0VX6N0S7jI5d3msKneYd34V5RJeLFv33m5rVhTxZwT"
		const uintdKbyvm = BigInt("30")
		const NasiLiquidityPoolFactoryNYi6zg = await NasiLiquidityPoolFactory.new(stringcfigQnX, stringgywLisb, uintdKbyvm, {from: accounts[5]});
		const byteZ1Bd1u2 = "0x1c1016040801110b120b100e1e130e181c200003081d0c1a161e110f0a1b1502"
		const byteoOwMj59 = "0x16150e0c151001070c07140c0620151f031a060d0b1f141a161303051e130b17"
		const uintdN53xYG = BigInt("181")
		const uintqYUCjwH = BigInt("431")
		const uinteOLbJQM = BigInt("84")
		const addresseyD3JIr = accounts[0]
		const uintLzVoEU4 = BigInt("298")
		const uintVH1pwG6 = BigInt("224")
		const addressjIUeTiM = accounts[0]
		const uintmmIHdCR = BigInt("1517")
		const addressqeU6mJJ = accounts[3]
		const 
i7AkK5q = await NasiLiquidityPoolFactoryNYi6zg.delegateBySig.call(addresseyD3JIr, uinteOLbJQM, uintqYUCjwH, uintdN53xYG, byteoOwMj59, byteZ1Bd1u2, {from: accounts[1]});
		const uint256v0F2Nv = await NasiLiquidityPoolFactoryNYi6zg.burn.call(uintLzVoEU4, {from: accounts[0]});
		const booluSxu9oo = await NasiLiquidityPoolFactoryNYi6zg.decreaseAllowance.call(addressjIUeTiM, uintVH1pwG6, {from: accounts[2]});
		await NasiLiquidityPoolFactoryNYi6zg.whenNotPaused.call({from: accounts[1]});
		const boolesFZhps = await NasiLiquidityPoolFactoryNYi6zg.approve.call(addressqeU6mJJ, uintmmIHdCR, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEDqDwNJ = "smjKJ3QSfoINsZGvUP18gJj6onkMHokw"
		const stringzTOgG2r = "ZUSQEtrIOol9lxUFi5ikA"
		const uintCpTOfGW = BigInt("135")
		const NasiLiquidityPoolFactory1He2kp = await NasiLiquidityPoolFactory.new(stringEDqDwNJ, stringzTOgG2r, uintCpTOfGW, {from: accounts[3]});
		const uintn5aje84 = BigInt("162")
		const addressLoRqwR1 = accounts[1]
		const boolLYAXLn7 = true
		const uintDTNqiaS = BigInt("1787")
		const uintcShBCu = BigInt("491")
		const uintFFsXHp0 = BigInt("195")
		const addressSFLGtEa = accounts[2]
		const boolmtNKVM0 = await NasiLiquidityPoolFactory1He2kp.approve.call(addressLoRqwR1, uintn5aje84, {from: accounts[3]});
		const uint2563No6eX = await NasiLiquidityPoolFactory1He2kp.setAllocationPoint.call(uintcShBCu, uintDTNqiaS, boolLYAXLn7, {from: accounts[0]});
		const boolzEfnqzL = await NasiLiquidityPoolFactory1He2kp.mint.call(addressSFLGtEa, uintFFsXHp0, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzhjzMJl = "3a1prGOWMYfQQa9FaL1djOgh104KAtxUBkVPljeEzbZRJW3BCsv7GHjYSINawYayMrxcM4QVzfwXgssp7Sa7u"
		const stringOxoVeJk = "L2G75SOvYUJ5CfJz858BYRbJUDogvBPPVcM23RsaXtlZq1GUJziVqa4qvkNfeWi0jdwrdNaNOL"
		const uintDoHnnSR = BigInt("236")
		const NasiLiquidityPoolFactoryTkKkKjI = await NasiLiquidityPoolFactory.new(stringzhjzMJl, stringOxoVeJk, uintDoHnnSR, {from: accounts[1]});
		const addressQHN8Tkk = accounts[3]
		const addressuBNIwa2 = accounts[1]
		const uintN3Fox7Q = BigInt("395")
		const addresslrzWTyI = accounts[2]
		const addressfdcTSQT = accounts[4]
		const addressDWFcBk = accounts[3]
		const addresswIj5dPj = accounts[3]
		const addressTwvzSBF = await NasiLiquidityPoolFactoryTkKkKjI.transferOwnership.call(addressQHN8Tkk, {from: accounts[0]});
		const boolMXHN7ya = await NasiLiquidityPoolFactoryTkKkKjI.isMinter.call(addressuBNIwa2, {from: accounts[3]});
		const boolJhQswdX = await NasiLiquidityPoolFactoryTkKkKjI.transferFrom.call(addressfdcTSQT, addresslrzWTyI, uintN3Fox7Q, {from: accounts[1]});
		const addressTH8mXda = await NasiLiquidityPoolFactoryTkKkKjI.delegates.call(addressDWFcBk, {from: accounts[3]});
		const addresszhJBN0D = await NasiLiquidityPoolFactoryTkKkKjI.addMinter.call(addresswIj5dPj, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringKSzGJ78 = "T6DwxjzqWVDnq45Z7ihpdAkOjqbhcwy8yiYWUrctLIYQv1h2OWRBxwKKVhqYUsnFYjSsnmbr3CBQ"
		const stringLSvoQgb = "wJ6fKCxVkY"
		const uintF9Ti5P2 = BigInt("104")
		const NasiLiquidityPoolFactorydaNx0Iy = await NasiLiquidityPoolFactory.new(stringKSzGJ78, stringLSvoQgb, uintF9Ti5P2, {from: "0x0000000000000000000000000000000000000001"});
		const uintVAuvPv8 = BigInt("334")
		const addressu7GTo4 = accounts[1]
		const uintWmKWgnn = BigInt("234")
		await NasiLiquidityPoolFactorydaNx0Iy.onlyMinter.call({from: accounts[3]});
		const uint2562bU7h5 = await NasiLiquidityPoolFactorydaNx0Iy.migrate.call(uintVAuvPv8, {from: accounts[4]});
		await NasiLiquidityPoolFactorydaNx0Iy.whenPaused.call({from: accounts[2]});
		const uint256m0rG16L = await NasiLiquidityPoolFactorydaNx0Iy.pendingNasi.call(uintWmKWgnn, addressu7GTo4, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresskLraFky = accounts[4]
		const addressxnkA2bu = accounts[0]
		const uintuvjB0n6 = BigInt("1661")
		const uintFQvECnr = BigInt("1340")
		const NasiLiquidityPoolFactoryc7CRjoH = await NasiLiquidityPoolFactory.new(addresskLraFky, addressxnkA2bu, uintuvjB0n6, uintFQvECnr, {from: "0x0000000000000000000000000000000000000001"});
		const addressQtrOtiG = accounts[2]
		const uinthOWRGSa = BigInt("764")
		const uinthSDBTAQ = BigInt("957")
		const boolY1hrDCX = await NasiLiquidityPoolFactoryc7CRjoH.isOwner.call({from: accounts[0]});
		const boolanxnIfu = await NasiLiquidityPoolFactoryc7CRjoH.isMinter.call(addressQtrOtiG, {from: accounts[0]});
		const uint256SNyyap = await NasiLiquidityPoolFactoryc7CRjoH.withdraw.call(uinthSDBTAQ, uinthOWRGSa, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringjyYWeK = "XIFpQPtGt3O74BlQKYgBuKSaMJ7uvxNFVkP9vQBm8Jwie43y4IG2Kl8VgESW50cz1ejEV9mt2Do1"
		const stringSEnnZrf = "N31SIX68il3dkfyUkxlt7VDvhtYCOSMYDf9QuYmq6Bwe3Pxbc6SW8i9gJg4YylT5QKgcUPK"
		const uintEzJkyWf = BigInt("116")
		const NasiLiquidityPoolFactorynkyzZTj = await NasiLiquidityPoolFactory.new(stringjyYWeK, stringSEnnZrf, uintEzJkyWf, {from: "0x0000000000000000000000000000000000000001"});
		const addressar7C4TC = accounts[4]
		const addresstghufpy = accounts[1]
		const uintz4SI2cw = BigInt("1058")
		const uintiJjC4xv = BigInt("448")
		const uintd0CdUt = BigInt("467")
		const addressxejUkBT = "0x0000000000000000000000000000000000000001"
		const uintQigt34N = BigInt("287")
		const uintkrZJX0l = BigInt("851")
		const addressNOXVYs6 = accounts[3]
		const addressqKpIecU = accounts[1]
		const uintQqA6pkf = BigInt("1205")
		const addressEvD8681 = accounts[4]
		const uint256lK7FJ7j = await NasiLiquidityPoolFactorynkyzZTj.allowance.call(addresstghufpy, addressar7C4TC, {from: accounts[0]});
		const 
l6J5QLg = await NasiLiquidityPoolFactorynkyzZTj._writeCheckpoint.call(addressxejUkBT, uintd0CdUt, uintiJjC4xv, uintz4SI2cw, {from: accounts[4]});
		await NasiLiquidityPoolFactorynkyzZTj.onlyPauser.call({from: accounts[2]});
		const uint256adbaZiR = await NasiLiquidityPoolFactorynkyzZTj.emergencyWithdraw.call(uintQigt34N, {from: accounts[0]});
		const boolyQSfRzn = await NasiLiquidityPoolFactorynkyzZTj.transferFrom.call(addressqKpIecU, addressNOXVYs6, uintkrZJX0l, {from: accounts[1]});
		const uint256tIdnmzN = await NasiLiquidityPoolFactorynkyzZTj.getPriorVotes.call(addressEvD8681, uintQqA6pkf, {from: accounts[2]});
	});
})